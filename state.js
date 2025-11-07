// state.js - Gestione dello stato dell'app
const STORAGE_KEY = 'calcolatore_spesa_cart';

let cart = [];
let customProductIdCounter = 1000;

// Dati utente per onboarding
export const state = {
    userName: '',
    listTitle: ''
};

function save() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {}
}

function load() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        cart = raw ? JSON.parse(raw) : [];
    } catch (e) {
        cart = [];
    }
}

load();

export function getCart() {
    return cart.slice();
}

export function clearCart() {
    cart = [];
    save();
}

export function addItem(product) {
    const existing = cart.find(
        (i) => i.id === product.id && !!i.isCustom === !!product.isCustom && i.price === product.price
    );
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    save();
}

export function addCustomProduct(name, price) {
    const product = {
        id: customProductIdCounter++,
        name,
        price,
        category: 'personalizzato',
        isCustom: true,
    };
    addItem(product);
}

export function updateQuantity(id, newQuantity, isCustom = false) {
    if (newQuantity <= 0) return removeItem(id, isCustom);
    const item = cart.find((i) => i.id === id && !!i.isCustom === !!isCustom);
    if (item) {
        item.quantity = newQuantity;
        save();
    }
}

export function removeItem(id, isCustom = false) {
    cart = cart.filter((i) => !(i.id === id && !!i.isCustom === !!isCustom));
    save();
}

export function getTotals() {
    const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return { totalItems, totalPrice };
}