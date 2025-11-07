// utils.js - Funzioni riutilizzabili
export function formatPrice(value) {
    return Number(value).toFixed(2);
}

export function debounce(fn, wait = 250) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
    };
}