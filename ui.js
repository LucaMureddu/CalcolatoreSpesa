// ui.js - Rendering e interazione DOM (solo UI)
import { formatPrice } from './utils.js';

const searchResults = document.getElementById('searchResults');
const cartItems = document.getElementById('cartItems');
const totalPriceEl = document.getElementById('totalPrice');
const totalItemsEl = document.getElementById('totalItems');

export function renderProductList(products) {
    if (!products || products.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Nessun prodotto trovato</p>
                <small>Prova a cercare per nome o categoria</small>
            </div>`;
        return;
    }
    searchResults.innerHTML = products
        .map(
            (p) => `
            <div class="product-item" data-id="${p.id}">
                <div class="product-info">
                    <div class="product-name">${p.name}</div>
                    <div class="product-price">€ ${formatPrice(p.price)}</div>
                </div>
                <button class="add-btn add-to-cart-btn" data-id="${p.id}">
                    <i class="fas fa-plus"></i>
                </button>
            </div>`
        )
        .join('');
}

export function renderCart(cart) {
    if (!cart || cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Il carrello è vuoto</div>';
        return;
    }
    cartItems.innerHTML = cart
        .map(
            (item) => `
        <div class="cart-item ${item.isCustom ? 'custom-item' : ''}" data-id="${item.id}" data-custom="${item.isCustom ? '1' : '0'}">
            <div class="cart-item-info">
                <div class="cart-item-name">
                    ${item.name}
                    ${item.isCustom ? '<span class="custom-badge">Personalizzato</span>' : ''}
                </div>
                <div class="cart-item-details">
                    <span class="cart-item-price">€ ${formatPrice(item.price)}</span>
                    <span class="cart-item-quantity">x${item.quantity}</span>
                    <span class="cart-item-total">€ ${formatPrice(item.price * item.quantity)}</span>
                </div>
            </div>
            <div class="cart-item-actions">
                <button class="quantity-btn minus-btn" data-action="decrement">-</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn plus-btn" data-action="increment">+</button>
                <button class="remove-btn" data-action="remove"><i class="fas fa-trash"></i></button>
            </div>
        </div>`
        )
        .join('');
}

export function updateTotalDisplay(totalPrice, totalItems) {
    totalPriceEl.textContent = `€ ${formatPrice(totalPrice)}`;
    totalItemsEl.textContent = totalItems;
}

export function showAddedFeedback(productId) {
    const item = searchResults.querySelector(`.product-item[data-id="${productId}"]`);
    if (!item) return;
    item.classList.add('item-added');
    setTimeout(() => item.classList.remove('item-added'), 600);
}

export function showCustomProductError(message) {
    const button = document.querySelector('.custom-add-btn');
    if (!button) return;
    const originalText = button.innerHTML;
    button.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${message}`;
    button.style.background = 'var(--color-danger)';
    button.disabled = true;
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = 'var(--gradient-success)';
        button.disabled = false;
    }, 3000);
}

export function showCustomProductSuccess() {
    const button = document.querySelector('.custom-add-btn');
    if (!button) return;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Aggiunto al Carrello!';
    button.classList.add('success');
    button.disabled = true;
    setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('success');
        button.disabled = false;
    }, 2000);
}