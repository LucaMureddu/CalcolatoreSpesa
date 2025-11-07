// Database dei prodotti (finta API)
const productDatabase = [
    // Latticini e Uova
    { id: 1, name: 'Latte Intero', price: 1.50, category: 'latticini' },
    { id: 2, name: 'Latte Parzialmente Scremato', price: 1.45, category: 'latticini' },
    { id: 3, name: 'Latte Scremato', price: 1.40, category: 'latticini' },
    { id: 4, name: 'Latte di Soia', price: 2.20, category: 'latticini' },
    { id: 5, name: 'Latte di Avena', price: 2.50, category: 'latticini' },
    { id: 6, name: 'Uova (6 pezzi)', price: 3.00, category: 'latticini' },
    { id: 7, name: 'Uova Bio (6 pezzi)', price: 4.20, category: 'latticini' },
    { id: 8, name: 'Yogurt Greco', price: 1.80, category: 'latticini' },
    { id: 9, name: 'Yogurt Naturale', price: 1.20, category: 'latticini' },
    { id: 10, name: 'Yogurt alla Frutta', price: 1.50, category: 'latticini' },
    { id: 11, name: 'Burro', price: 3.20, category: 'latticini' },
    { id: 12, name: 'Panna da Cucina', price: 1.80, category: 'latticini' },
    { id: 13, name: 'Ricotta', price: 2.40, category: 'latticini' },

    // Formaggi
    { id: 14, name: 'Mozzarella', price: 2.80, category: 'formaggi' },
    { id: 15, name: 'Parmigiano Reggiano', price: 8.90, category: 'formaggi' },
    { id: 16, name: 'Gorgonzola', price: 4.50, category: 'formaggi' },
    { id: 17, name: 'Pecorino Romano', price: 6.20, category: 'formaggi' },
    { id: 18, name: 'Fontina', price: 5.80, category: 'formaggi' },
    { id: 19, name: 'Taleggio', price: 4.90, category: 'formaggi' },
    { id: 20, name: 'Stracchino', price: 3.20, category: 'formaggi' },
    { id: 21, name: 'Provolone', price: 4.80, category: 'formaggi' },

    // Panetteria
    { id: 22, name: 'Pane Casereccio', price: 2.20, category: 'panetteria' },
    { id: 23, name: 'Pane Integrale', price: 2.50, category: 'panetteria' },
    { id: 24, name: 'Pane di Segale', price: 2.80, category: 'panetteria' },
    { id: 25, name: 'Focaccia', price: 3.50, category: 'panetteria' },
    { id: 26, name: 'Grissini', price: 1.80, category: 'panetteria' },
    { id: 27, name: 'Crackers', price: 2.20, category: 'panetteria' },
    { id: 28, name: 'Fette Biscottate', price: 1.90, category: 'panetteria' },

    // Pasta e Cereali
    { id: 29, name: 'Pasta Spaghetti', price: 1.10, category: 'pasta' },
    { id: 30, name: 'Pasta Penne', price: 1.15, category: 'pasta' },
    { id: 31, name: 'Pasta Fusilli', price: 1.20, category: 'pasta' },
    { id: 32, name: 'Pasta Integrale', price: 1.80, category: 'pasta' },
    { id: 33, name: 'Lasagne', price: 1.50, category: 'pasta' },
    { id: 34, name: 'Gnocchi', price: 2.20, category: 'pasta' },
    { id: 35, name: 'Riso Arborio', price: 2.50, category: 'cereali' },
    { id: 36, name: 'Riso Basmati', price: 3.20, category: 'cereali' },
    { id: 37, name: 'Riso Integrale', price: 2.80, category: 'cereali' },
    { id: 38, name: 'Quinoa', price: 4.50, category: 'cereali' },
    { id: 39, name: 'Avena', price: 2.20, category: 'cereali' },
    { id: 40, name: 'Orzo', price: 1.80, category: 'cereali' },

    // Frutta
    { id: 41, name: 'Banane (1kg)', price: 2.30, category: 'frutta' },
    { id: 42, name: 'Mele (1kg)', price: 2.10, category: 'frutta' },
    { id: 43, name: 'Pere (1kg)', price: 2.80, category: 'frutta' },
    { id: 44, name: 'Arance (1kg)', price: 1.90, category: 'frutta' },
    { id: 45, name: 'Limoni (500g)', price: 1.50, category: 'frutta' },
    { id: 46, name: 'Kiwi (500g)', price: 2.20, category: 'frutta' },
    { id: 47, name: 'Fragole (500g)', price: 3.50, category: 'frutta' },
    { id: 48, name: 'Uva (500g)', price: 2.80, category: 'frutta' },
    { id: 49, name: 'Pesche (1kg)', price: 3.20, category: 'frutta' },
    { id: 50, name: 'Albicocche (500g)', price: 3.80, category: 'frutta' },
    { id: 51, name: 'Ananas', price: 2.50, category: 'frutta' },
    { id: 52, name: 'Melone', price: 3.20, category: 'frutta' },
    { id: 53, name: 'Anguria', price: 4.50, category: 'frutta' },

    // Verdura
    { id: 54, name: 'Pomodori (500g)', price: 1.90, category: 'verdura' },
    { id: 55, name: 'Insalata', price: 1.20, category: 'verdura' },
    { id: 56, name: 'Spinaci (500g)', price: 2.20, category: 'verdura' },
    { id: 57, name: 'Carote (1kg)', price: 1.50, category: 'verdura' },
    { id: 58, name: 'Zucchine (500g)', price: 1.80, category: 'verdura' },
    { id: 59, name: 'Melanzane (500g)', price: 2.50, category: 'verdura' },
    { id: 60, name: 'Peperoni (500g)', price: 2.80, category: 'verdura' },
    { id: 61, name: 'Cipolle (1kg)', price: 1.20, category: 'verdura' },
    { id: 62, name: 'Aglio (200g)', price: 1.50, category: 'verdura' },
    { id: 63, name: 'Patate (1kg)', price: 1.80, category: 'verdura' },
    { id: 64, name: 'Broccoli (500g)', price: 2.20, category: 'verdura' },
    { id: 65, name: 'Cavolfiore (500g)', price: 2.50, category: 'verdura' },
    { id: 66, name: 'Cetrioli (500g)', price: 1.60, category: 'verdura' },
    { id: 67, name: 'Basilico', price: 1.20, category: 'verdura' },
    { id: 68, name: 'Prezzemolo', price: 0.80, category: 'verdura' },

    // Carne
    { id: 69, name: 'Pollo (1kg)', price: 8.50, category: 'carne' },
    { id: 70, name: 'Manzo (500g)', price: 12.50, category: 'carne' },
    { id: 71, name: 'Maiale (500g)', price: 9.80, category: 'carne' },
    { id: 72, name: 'Agnello (500g)', price: 15.20, category: 'carne' },
    { id: 73, name: 'Salsicce (500g)', price: 6.50, category: 'carne' },
    { id: 74, name: 'Hamburger (4 pezzi)', price: 5.80, category: 'carne' },
    { id: 75, name: 'Bistecca (500g)', price: 14.50, category: 'carne' },

    // Pesce
    { id: 76, name: 'Salmone (500g)', price: 12.80, category: 'pesce' },
    { id: 77, name: 'Branzino (500g)', price: 10.50, category: 'pesce' },
    { id: 78, name: 'Orata (500g)', price: 9.80, category: 'pesce' },
    { id: 79, name: 'Gamberetti (300g)', price: 8.50, category: 'pesce' },
    { id: 80, name: 'Calamari (500g)', price: 7.20, category: 'pesce' },
    { id: 81, name: 'Baccalà (300g)', price: 6.80, category: 'pesce' },

    // Salumi
    { id: 82, name: 'Prosciutto Cotto', price: 5.20, category: 'salumi' },
    { id: 83, name: 'Prosciutto Crudo', price: 8.50, category: 'salumi' },
    { id: 84, name: 'Salame', price: 6.80, category: 'salumi' },
    { id: 85, name: 'Mortadella', price: 4.50, category: 'salumi' },
    { id: 86, name: 'Bresaola', price: 9.20, category: 'salumi' },
    { id: 87, name: 'Speck', price: 7.80, category: 'salumi' },

    // Conserve e Scatolame
    { id: 88, name: 'Passata di Pomodoro', price: 0.90, category: 'conserve' },
    { id: 89, name: 'Pomodori Pelati', price: 1.20, category: 'conserve' },
    { id: 90, name: 'Tonno in Scatola', price: 1.60, category: 'conserve' },
    { id: 91, name: 'Salmone in Scatola', price: 2.80, category: 'conserve' },
    { id: 92, name: 'Fagioli in Scatola', price: 1.20, category: 'conserve' },
    { id: 93, name: 'Ceci in Scatola', price: 1.15, category: 'conserve' },
    { id: 94, name: 'Lenticchie in Scatola', price: 1.30, category: 'conserve' },
    { id: 95, name: 'Mais in Scatola', price: 1.10, category: 'conserve' },
    { id: 96, name: 'Olive Verdi', price: 2.20, category: 'conserve' },
    { id: 97, name: 'Olive Nere', price: 2.50, category: 'conserve' },

    // Condimenti e Spezie
    { id: 98, name: 'Olio Extravergine', price: 4.50, category: 'condimenti' },
    { id: 99, name: 'Aceto Balsamico', price: 3.20, category: 'condimenti' },
    { id: 100, name: 'Sale', price: 0.80, category: 'condimenti' },
    { id: 101, name: 'Pepe Nero', price: 2.50, category: 'condimenti' },
    { id: 102, name: 'Origano', price: 1.50, category: 'condimenti' },
    { id: 103, name: 'Rosmarino', price: 1.80, category: 'condimenti' },
    { id: 104, name: 'Salvia', price: 1.60, category: 'condimenti' },
    { id: 105, name: 'Paprika', price: 2.20, category: 'condimenti' },
    { id: 106, name: 'Curcuma', price: 2.80, category: 'condimenti' },
    { id: 107, name: 'Zenzero', price: 3.20, category: 'condimenti' },

    // Bevande
    { id: 108, name: 'Caffè Macinato', price: 3.80, category: 'bevande' },
    { id: 109, name: 'Caffè in Grani', price: 4.50, category: 'bevande' },
    { id: 110, name: 'Tè Verde', price: 2.20, category: 'bevande' },
    { id: 111, name: 'Tè Nero', price: 2.00, category: 'bevande' },
    { id: 112, name: 'Acqua Minerale (6 bottiglie)', price: 2.00, category: 'bevande' },
    { id: 113, name: 'Acqua Frizzante (6 bottiglie)', price: 2.20, category: 'bevande' },
    { id: 114, name: 'Succo d\'Arancia', price: 2.50, category: 'bevande' },
    { id: 115, name: 'Succo di Mela', price: 2.30, category: 'bevande' },
    { id: 116, name: 'Coca Cola', price: 1.80, category: 'bevande' },
    { id: 117, name: 'Birra (6 bottiglie)', price: 4.50, category: 'bevande' },
    { id: 118, name: 'Vino Rosso', price: 6.80, category: 'bevande' },
    { id: 119, name: 'Vino Bianco', price: 6.50, category: 'bevande' },

    // Dolci e Snack
    { id: 120, name: 'Biscotti', price: 2.40, category: 'dolci' },
    { id: 121, name: 'Cioccolato Fondente', price: 3.20, category: 'dolci' },
    { id: 122, name: 'Cioccolato al Latte', price: 2.80, category: 'dolci' },
    { id: 123, name: 'Nutella', price: 4.50, category: 'dolci' },
    { id: 124, name: 'Marmellata', price: 2.80, category: 'dolci' },
    { id: 125, name: 'Miele', price: 4.20, category: 'dolci' },
    { id: 126, name: 'Patatine', price: 1.80, category: 'snack' },
    { id: 127, name: 'Noccioline', price: 2.50, category: 'snack' },
    { id: 128, name: 'Mandorle', price: 4.80, category: 'snack' },
    { id: 129, name: 'Pistacchi', price: 6.20, category: 'snack' },

    // Surgelati
    { id: 130, name: 'Gelato', price: 4.20, category: 'surgelati' },
    { id: 131, name: 'Pizza Surgelata', price: 3.50, category: 'surgelati' },
    { id: 132, name: 'Verdure Miste Surgelate', price: 2.80, category: 'surgelati' },
    { id: 133, name: 'Pesce Surgelato', price: 6.50, category: 'surgelati' },
    { id: 134, name: 'Patatine Surgelate', price: 2.20, category: 'surgelati' },

    // Prodotti per la Casa
    { id: 135, name: 'Detersivo Piatti', price: 2.50, category: 'casa' },
    { id: 136, name: 'Detersivo Lavatrice', price: 4.80, category: 'casa' },
    { id: 137, name: 'Carta Igienica (8 rotoli)', price: 3.20, category: 'casa' },
    { id: 138, name: 'Tovaglioli', price: 1.50, category: 'casa' },
    { id: 139, name: 'Spugne', price: 2.20, category: 'casa' },
    { id: 140, name: 'Sacchetti Spazzatura', price: 2.80, category: 'casa' }
];

// Stato dell'applicazione
let cart = [];
let currentSearchResults = [];
let customProductIdCounter = 1000; // Inizia da 1000 per evitare conflitti con i prodotti esistenti

// Elementi DOM
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');
const totalItems = document.getElementById('totalItems');
const customProductForm = document.getElementById('customProductForm');
const customProductName = document.getElementById('customProductName');
const customProductPrice = document.getElementById('customProductPrice');

// Inizializzazione dell'app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Event listener per la ricerca
    searchInput.addEventListener('input', handleSearch);
    
    // Event listener per il form prodotto personalizzato
    customProductForm.addEventListener('submit', handleCustomProduct);
    
    // Mostra tutti i prodotti inizialmente
    displaySearchResults(productDatabase);
    
    // Aggiorna il display del carrello
    displayCart();
    updateTotal();
}

// Gestione della ricerca
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // Se la ricerca è vuota, mostra tutti i prodotti
        displaySearchResults(productDatabase);
        return;
    }
    
    // Filtra i prodotti in base al termine di ricerca
    const filteredProducts = productDatabase.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    displaySearchResults(filteredProducts);
}

// Gestione del prodotto personalizzato
function handleCustomProduct(event) {
    event.preventDefault();
    
    const name = customProductName.value.trim();
    const price = parseFloat(customProductPrice.value);
    
    // Validazione
    if (!name || name.length < 2) {
        showCustomProductError('Il nome del prodotto deve avere almeno 2 caratteri');
        return;
    }
    
    if (!price || price <= 0) {
        showCustomProductError('Il prezzo deve essere maggiore di 0');
        return;
    }
    
    // Crea il prodotto personalizzato
    const customProduct = {
        id: customProductIdCounter++,
        name: name,
        price: price,
        category: 'personalizzato',
        isCustom: true
    };
    
    // Aggiunge al carrello
    addCustomProductToCart(customProduct);
    
    // Reset del form
    customProductForm.reset();
    
    // Feedback positivo
    showCustomProductSuccess();
}

// Aggiunta prodotto personalizzato al carrello
function addCustomProductToCart(product) {
    // Controlla se il prodotto personalizzato esiste già nel carrello
    const existingItem = cart.find(item => 
        item.isCustom && 
        item.name.toLowerCase() === product.name.toLowerCase() && 
        item.price === product.price
    );
    
    if (existingItem) {
        // Se esiste già, aumenta la quantità
        existingItem.quantity += 1;
    } else {
        // Altrimenti aggiunge un nuovo elemento
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Aggiorna il display
    displayCart();
    updateTotal();
    saveCartToStorage();
}

// Mostra errore per prodotto personalizzato
function showCustomProductError(message) {
    const button = document.querySelector('.custom-add-btn');
    const originalText = button.innerHTML;
    
    button.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${message}`;
    button.style.background = '#F44336';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        button.disabled = false;
    }, 3000);
}

// Mostra successo per prodotto personalizzato
function showCustomProductSuccess() {
    const button = document.querySelector('.custom-add-btn');
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

// Visualizzazione dei risultati di ricerca
function displaySearchResults(results) {
    currentSearchResults = results;
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Nessun prodotto trovato</p>
                <small>Prova con un altro termine di ricerca</small>
            </div>
        `;
        return;
    }
    
    searchResults.innerHTML = results.map(product => `
        <div class="product-item" data-product-id="${product.id}">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">€ ${product.price.toFixed(2)}</div>
            </div>
            <button class="add-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-plus"></i>
                Aggiungi
            </button>
        </div>
    `).join('');
}

// Aggiunta al carrello
function addToCart(productId) {
    const product = productDatabase.find(p => p.id === productId);
    
    if (!product) return;
    
    // Controlla se il prodotto è già nel carrello
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        // Se esiste già, aumenta la quantità
        existingItem.quantity += 1;
    } else {
        // Altrimenti aggiunge un nuovo elemento
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Aggiorna il display
    displayCart();
    updateTotal();
    
    // Feedback visivo
    showAddedFeedback(productId);
}

// Rimozione dal carrello
function removeFromCart(productId, isCustom = false) {
    const itemIndex = cart.findIndex(item => item.id === productId && !!item.isCustom === isCustom);
    
    if (itemIndex === -1) return;
    
    const item = cart[itemIndex];
    
    if (item.quantity > 1) {
        // Se la quantità è maggiore di 1, diminuisce
        item.quantity -= 1;
    } else {
        // Altrimenti rimuove completamente l'elemento
        cart.splice(itemIndex, 1);
    }
    
    // Aggiorna il display
    displayCart();
    updateTotal();
}

// Rimozione completa dal carrello
function removeCompletelyFromCart(productId, isCustom = false) {
    cart = cart.filter(item => !(item.id === productId && !!item.isCustom === isCustom));
    displayCart();
    updateTotal();
}

// Visualizzazione del carrello
function displayCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Il tuo carrello è vuoto</p>
                <small>Cerca e aggiungi prodotti per iniziare</small>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item ${item.isCustom ? 'custom-item' : ''}" data-cart-id="${item.id}">
            <div class="cart-item-info">
                <div class="cart-item-name">
                    ${item.name}
                    ${item.isCustom ? '<span class="custom-badge">Personalizzato</span>' : ''}
                </div>
                <div class="cart-item-details">
                    <span class="cart-item-price">€ ${item.price.toFixed(2)}</span>
                    <span class="cart-item-quantity">x ${item.quantity}</span>
                    <span class="cart-item-total">= € ${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
            <div class="cart-item-actions">
                <button class="quantity-btn minus-btn" onclick="removeFromCart(${item.id})" title="Rimuovi uno">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn plus-btn" onclick="addToCart(${item.id})" title="Aggiungi uno">
                    <i class="fas fa-plus"></i>
                </button>
                <button class="remove-btn" onclick="removeCompletelyFromCart(${item.id})" title="Rimuovi tutto">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Aggiornamento del totale
function updateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    totalPrice.textContent = `€ ${total.toFixed(2)}`;
    totalItems.textContent = `${itemCount} ${itemCount === 1 ? 'articolo' : 'articoli'}`;
    
    // Aggiorna il titolo della pagina con il totale
    document.title = `Calcolatore di Spesa - € ${total.toFixed(2)}`;
}

// Feedback visivo per l'aggiunta al carrello
function showAddedFeedback(productId) {
    const productElement = document.querySelector(`[data-product-id="${productId}"]`);
    if (productElement) {
        const button = productElement.querySelector('.add-btn');
        const originalText = button.innerHTML;
        
        button.innerHTML = '<i class="fas fa-check"></i> Aggiunto!';
        button.style.background = '#45a049';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '#4CAF50';
        }, 1000);
    }
}

// Funzioni di utilità
function formatPrice(price) {
    return `€ ${price.toFixed(2)}`;
}

function clearCart() {
    cart = [];
    displayCart();
    updateTotal();
}

// Gestione della persistenza (localStorage)
function saveCartToStorage() {
    localStorage.setItem('expenseCalculatorCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('expenseCalculatorCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        displayCart();
        updateTotal();
    }
}

// Salva il carrello ogni volta che viene modificato
function addToCart(productId) {
    const product = productDatabase.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    displayCart();
    updateTotal();
    saveCartToStorage();
    showAddedFeedback(productId);
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex === -1) return;
    
    const item = cart[itemIndex];
    
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart.splice(itemIndex, 1);
    }
    
    displayCart();
    updateTotal();
    saveCartToStorage();
}

function removeCompletelyFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    displayCart();
    updateTotal();
    saveCartToStorage();
}

// Carica il carrello all'avvio
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    initializeApp();
});

// Gestione dei tasti di scelta rapida
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + K per focus sulla ricerca
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        searchInput.focus();
        searchInput.select();
    }
    
    // Escape per pulire la ricerca
    if (event.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        displaySearchResults(productDatabase);
    }
});

// Aggiunge stili CSS dinamici per i controlli quantità
const style = document.createElement('style');
style.textContent = `
    .cart-item-details {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-top: 5px;
        font-size: 0.9rem;
    }
    
    .cart-item-quantity {
        color: #666;
        font-weight: 500;
    }
    
    .cart-item-total {
        color: #4CAF50;
        font-weight: 700;
    }
    
    .cart-item-actions {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .quantity-btn {
        background: #f0f0f0;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        font-size: 0.8rem;
    }
    
    .quantity-btn:hover {
        background: #e0e0e0;
        transform: scale(1.1);
    }
    
    .plus-btn:hover {
        background: #e8f5e8;
        color: #4CAF50;
    }
    
    .minus-btn:hover {
        background: #ffeaea;
        color: #F44336;
    }
    
    .quantity-display {
        min-width: 20px;
        text-align: center;
        font-weight: 600;
        color: #333;
    }
    
    .no-results {
        text-align: center;
        padding: 40px 20px;
        color: #999;
    }
    
    .no-results i {
        font-size: 2.5rem;
        margin-bottom: 15px;
        opacity: 0.5;
    }
    
    .no-results p {
        font-size: 1.1rem;
        margin-bottom: 5px;
    }
    
    .no-results small {
        font-size: 0.9rem;
        opacity: 0.7;
    }
    
    @media (max-width: 768px) {
        .cart-item-actions {
            margin-top: 10px;
            justify-content: flex-end;
        }
        
        .cart-item-details {
            flex-wrap: wrap;
        }
    }
`;
document.head.appendChild(style);