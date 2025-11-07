// main.js - Entry point (ESM)
import { productDatabase } from './api.js';
import { getCart, addItem, addCustomProduct, updateQuantity, removeItem, getTotals, state } from './state.js';
import { renderProductList, renderCart, updateTotalDisplay, showAddedFeedback, showCustomProductError, showCustomProductSuccess } from './ui.js';
import { debounce } from './utils.js';

const searchInput = document.getElementById('searchInput');
const customProductForm = document.getElementById('customProductForm');
const customProductName = document.getElementById('customProductName');
const customProductPrice = document.getElementById('customProductPrice');
const searchResults = document.getElementById('searchResults');
const cartItems = document.getElementById('cartItems');
const exportButton = document.getElementById('export-btn');
// Onboarding elements
const welcomeModal = document.getElementById('welcome-modal');
const startForm = document.getElementById('start-form');
const userNameInput = document.getElementById('user-name');
const listTitleInput = document.getElementById('list-title');
const cartTitle = document.querySelector('.cart-section h2');

let currentResults = productDatabase.slice();

function updateUITitles() {
    if (!cartTitle) return;
    const title = state.listTitle ? state.listTitle : 'La Tua Spesa';
    const nameSuffix = state.userName ? ` di ${state.userName}` : '';
    cartTitle.innerHTML = `<i class="fas fa-shopping-basket"></i> ${title}${nameSuffix}`;
}

function initializeApp() {
    const savedName = localStorage.getItem('userName');
    const savedTitle = localStorage.getItem('listTitle');
    if (!savedName || !savedTitle) {
        // Mostra il modal per raccogliere i dati
        if (welcomeModal) welcomeModal.classList.add('visible');
    } else {
        state.userName = savedName;
        state.listTitle = savedTitle || '';
        updateUITitles();
    }
}

function init() {
    // Onboarding
    initializeApp();

    // Render initial state
    renderProductList(currentResults);
    renderCart(getCart());
    const { totalPrice, totalItems } = getTotals();
    updateTotalDisplay(totalPrice, totalItems);

    // Search with debounce
    const onSearch = debounce((e) => {
        const q = e.target.value.trim().toLowerCase();
        if (!q) {
            currentResults = productDatabase.slice();
        } else {
            currentResults = productDatabase.filter((p) =>
                p.name.toLowerCase().includes(q) || (p.category && p.category.toLowerCase().includes(q))
            );
        }
        renderProductList(currentResults);
    }, 250);
    searchInput.addEventListener('input', onSearch);

    // Add product from results (delegation)
    searchResults.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart-btn');
        if (!btn) return;
        const id = Number(btn.dataset.id);
        const product = productDatabase.find((p) => p.id === id);
        if (!product) return;
        addItem(product);
        renderCart(getCart());
        const { totalPrice, totalItems } = getTotals();
        updateTotalDisplay(totalPrice, totalItems);
        showAddedFeedback(id);
    });

    // Cart events (delegation)
    cartItems.addEventListener('click', (e) => {
        const itemEl = e.target.closest('.cart-item');
        if (!itemEl) return;
        const id = Number(itemEl.dataset.id);
        const isCustom = itemEl.dataset.custom === '1';
        const actionBtn = e.target.closest('[data-action]');
        if (!actionBtn) return;
        const action = actionBtn.dataset.action;
        const cart = getCart();
        const item = cart.find((i) => i.id === id && !!i.isCustom === !!isCustom);
        if (!item) return;
        if (action === 'increment') {
            updateQuantity(id, item.quantity + 1, isCustom);
        } else if (action === 'decrement') {
            updateQuantity(id, item.quantity - 1, isCustom);
        } else if (action === 'remove') {
            removeItem(id, isCustom);
        }
        renderCart(getCart());
        const { totalPrice, totalItems } = getTotals();
        updateTotalDisplay(totalPrice, totalItems);
    });

    // Custom product form
    customProductForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = customProductName.value.trim();
        const price = parseFloat(customProductPrice.value);
        if (!name || name.length < 2) {
            return showCustomProductError('Il nome del prodotto deve avere almeno 2 caratteri');
        }
        if (!price || price <= 0) {
            return showCustomProductError('Il prezzo deve essere maggiore di 0');
        }
        addCustomProduct(name, price);
        customProductForm.reset();
        renderCart(getCart());
        const { totalPrice, totalItems } = getTotals();
        updateTotalDisplay(totalPrice, totalItems);
        showCustomProductSuccess();
    });

    // Modal submit
    if (startForm) {
        startForm.addEventListener('submit', (event) => {
            event.preventDefault();
            state.userName = userNameInput.value.trim();
            state.listTitle = listTitleInput.value.trim();
            localStorage.setItem('userName', state.userName);
            localStorage.setItem('listTitle', state.listTitle);
            updateUITitles();
            if (welcomeModal) welcomeModal.classList.remove('visible');
        });
    }

    // Export button
    if (exportButton) {
        exportButton.addEventListener('click', () => {
            const cart = getCart();
            if (!cart || cart.length === 0) {
                alert('Il carrello è vuoto. Aggiungi dei prodotti prima di esportare.');
                return;
            }
            exportListAsText(cart);
        });
    }
}

function exportListAsText(cart) {
    const title = state.listTitle || 'La Tua Spesa';
    const owner = state.userName || '';
    let listContent = `Lista della Spesa: ${title}\n`;
    listContent += `Proprietario: ${owner}\n`;
    listContent += '----------------------------------------\n\n';

    let total = 0;
    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        listContent += `${item.quantity} x ${item.name} - €${itemTotal.toFixed(2)}\n`;
        total += itemTotal;
    });

    listContent += '\n----------------------------------------\n';
    listContent += `TOTALE: €${total.toFixed(2)}`;

    const blob = new Blob([listContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const safeFileName = (title || 'lista_spesa').replace(/\s+/g, '_').toLowerCase();
    link.download = `${safeFileName}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

document.addEventListener('DOMContentLoaded', init);