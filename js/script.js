// Global variables
let cart = [];
let currentProduct = null;

// Products data
const products = [
    // Agujas para Biopsia - Magnum
    {
        id: 1,
        name: "Aguja Magnum Automática Corte Trucut 12ga x 10cm",
        description: "",
        category: "agujas-biopsia",
        price: 450,
        images: ["", "", ""]
    },
    {
        id: 2,
        name: "Aguja Magnum Automática Corte Trucut 14ga x 10cm",
        description: "",
        category: "agujas-biopsia",
        price: 450,
        images: ["", "", ""]
    },
    {
        id: 3,
        name: "Aguja Magnum Automática Corte Trucut 16ga x 16cm",
        description: "",
        category: "agujas-biopsia",
        price: 450,
        images: ["", "", ""]
    },
    {
        id: 4,
        name: "Aguja Magnum Automática Corte Trucut 18ga x 10cm",
        description: "",
        category: "agujas-biopsia",
        price: 450,
        images: ["", "", ""]
    },
    {
        id: 5,
        name: "Aguja Magnum Automática Corte Trucut 18ga x 20cm",
        description: "",
        category: "agujas-biopsia",
        price: 450,
        images: ["", "", ""]
    },
    {
        id: 6,
        name: "Aguja MAX CORE Semiautomática Corte Trucut 14ga x 10cm",
        description: "",
        category: "agujas-biopsia",
        price: 450,
        images: ["", "", ""]
    },
    {
        id: 7,
        name: "Aguja MaxCore Semi-automática Corte Trucut 16ga x 16cm",
        description: "",
        category: "agujas-biopsia",
        price: 450,
        images: ["", "", ""]
    },

    // Agujas para Biopsia - Chiba
    {
        id: 8,
        name: "Aguja de Aspiración de Tejidos Blandos FNA 18G | 15cm",
        description: "",
        category: "agujas-biopsia",
        price: 350,
        images: ["", "", ""]
    },
    {
        id: 9,
        name: "Aguja de Aspiración de Tejidos Blandos FNA 18G | 20cm",
        description: "",
        category: "agujas-biopsia",
        price: 350,
        images: ["", "", ""]
    },
    {
        id: 10,
        name: "Aguja de Aspiración de Tejidos Blandos FNA 20G | 20cm",
        description: "",
        category: "agujas-biopsia",
        price: 350,
        images: ["", "", ""]
    },
    {
        id: 11,
        name: "Aguja de Aspiración de Tejidos Blandos FNA 22G | 22cm",
        description: "",
        category: "agujas-biopsia",
        price: 350,
        images: ["", "", ""]
    },
    {
        id: 12,
        name: "Aguja de Aspiración de Tejidos Blandos FNA 22G | 15cm",
        description: "",
        category: "agujas-biopsia",
        price: 350,
        images: ["", "", ""]
    },

    // Agujas para Biopsia con Sistema Coaxial
    {
        id: 13,
        name: "Aguja con Sistema Coaxial 18 x 10cm",
        description: "",
        category: "agujas-biopsia",
        price: 500,
        images: ["", "", ""]
    },
    {
        id: 14,
        name: "Aguja con Sistema Coaxial 18 x 11cm",
        description: "",
        category: "agujas-biopsia",
        price: 500,
        images: ["", "", ""]
    },
    {
        id: 15,
        name: "Aguja con Sistema Coaxial 18 x 15cm",
        description: "",
        category: "agujas-biopsia",
        price: 500,
        images: ["", "", ""]
    },
    {
        id: 16,
        name: "Ultraclip",
        description: "",
        category: "agujas-biopsia",
        price: 300,
        images: ["", "", ""]
    },

    // Catéteres
    {
        id: 17,
        name: "Multicath",
        description: "",
        category: "cateteres",
        price: 400,
        images: ["", "", ""]
    },
    {
        id: 18,
        name: "Catéter Niagara",
        description: "",
        category: "cateteres",
        price: 450,
        images: ["", "", ""]
    },
    {
        id: 19,
        name: "Catéter Multipropósito",
        description: "",
        category: "cateteres",
        price: 400,
        images: ["", "", ""]
    },
    {
        id: 20,
        name: "Catéter Biliar",
        description: "",
        category: "cateteres",
        price: 450,
        images: ["", "", ""]
    },
    {
        id: 21,
        name: "Power PICC",
        description: "",
        category: "cateteres",
        price: 500,
        images: ["", "", ""]
    },
    {
        id: 22,
        name: "Catéter Performa",
        description: "",
        category: "cateteres",
        price: 450,
        images: ["", "", ""]
    },
    {
        id: 23,
        name: "Catéter Doble J",
        description: "",
        category: "cateteres",
        price: 400,
        images: ["", "", ""]
    },
    {
        id: 24,
        name: "Catéter Intravenoso",
        description: "",
        category: "cateteres",
        price: 350,
        images: ["", "", ""]
    },

    // Drenajes
    {
        id: 25,
        name: "Drenaje Blake",
        description: "",
        category: "drenajes",
        price: 400,
        images: ["", "", ""]
    },
    {
        id: 26,
        name: "Bolsa Depot",
        description: "",
        category: "drenajes",
        price: 250,
        images: ["", "", ""]
    },
    {
        id: 27,
        name: "Bolsa de Drenaje Urinario Dover",
        description: "",
        category: "drenajes",
        price: 200,
        images: ["", "", ""]
    },

    // Otros Materiales
    {
        id: 28,
        name: "Guías Hidrofílicas",
        description: "",
        category: "otros-materiales",
        price: 350,
        images: ["", "", ""]
    },
    {
        id: 29,
        name: "Metriset",
        description: "",
        category: "otros-materiales",
        price: 300,
        images: ["", "", ""]
    },
    {
        id: 30,
        name: "Aguja Punch",
        description: "",
        category: "otros-materiales",
        price: 250,
        images: ["", "", ""]
    },
    {
        id: 31,
        name: "Kit Mini Access",
        description: "",
        category: "otros-materiales",
        price: 500,
        images: ["", "", ""]
    },
    {
        id: 32,
        name: "Bolsa de Nutrición Enterobag",
        description: "",
        category: "otros-materiales",
        price: 300,
        images: ["", "", ""]
    },
    {
        id: 33,
        name: "Colchón de Presión Alterna",
        description: "",
        category: "otros-materiales",
        price: 800,
        images: ["", "", ""]
    },
    {
        id: 34,
        name: "Apósito con Clorexidina",
        description: "",
        category: "otros-materiales",
        price: 150,
        images: ["", "", ""]
    },
    {
        id: 35,
        name: "Estabilizador de Catéter Power PICC",
        description: "",
        category: "otros-materiales",
        price: 200,
        images: ["", "", ""]
    },
    {
        id: 36,
        name: "Biconectores",
        description: "",
        category: "otros-materiales",
        price: 100,
        images: ["", "", ""]
    },
    {
        id: 37,
        name: "Infusor Baxter 48 HRS",
        description: "",
        category: "otros-materiales",
        price: 400,
        images: ["", "", ""]
    },
    {
        id: 38,
        name: "Aguja Huber",
        description: "",
        category: "otros-materiales",
        price: 250,
        images: ["", "", ""]
    },
    {
        id: 39,
        name: "Aguja Espinal",
        description: "",
        category: "otros-materiales",
        price: 300,
        images: ["", "", ""]
    },
    {
        id: 40,
        name: "Cartuchos para Engrapadora",
        description: "",
        category: "otros-materiales",
        price: 350,
        images: ["", "", ""]
    },
    {
        id: 41,
        name: "Engrapadora de Piel",
        description: "",
        category: "otros-materiales",
        price: 450,
        images: ["", "", ""]
    },
    {
        id: 42,
        name: "Cánula Shiley",
        description: "",
        category: "otros-materiales",
        price: 400,
        images: ["", "", ""]
    },
    {
        id: 43,
        name: "Surgiclip Medium",
        description: "",
        category: "otros-materiales",
        price: 300,
        images: ["", "", ""]
    },
    {
        id: 44,
        name: "Endogia Dorada",
        description: "",
        category: "otros-materiales",
        price: 600,
        images: ["", "", ""]
    },
    {
        id: 45,
        name: "Electrocauterio",
        description: "",
        category: "otros-materiales",
        price: 550,
        images: ["", "", ""]
    },
    {
        id: 46,
        name: "Equipo para Bomba de Infusión",
        description: "",
        category: "otros-materiales",
        price: 400,
        images: ["", "", ""]
    }
];

// DOM elements
const navLinks = document.querySelectorAll('.nav-link');
const tabContents = document.querySelectorAll('.tab-content');
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const paymentModal = document.getElementById('paymentModal');
const productModal = document.getElementById('productModal');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    loadProducts();
    setupEventListeners();
    setupCategoryFilters();
    updateCartCount();
});

// Setup event listeners
function setupEventListeners() {
    // Navigation - Only setup tab navigation if we're on index.html with all sections
    const allSections = document.querySelectorAll('#inicio, #nosotros, #productos, #contacto');
    if (allSections.length >= 4) {
        // We're on the main page with all tabs, setup tab navigation
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.getAttribute('data-tab')) {
                    e.preventDefault();
                    const tabName = this.getAttribute('data-tab');
                    showTab(tabName);
                }
            });
        });
    }

    // Cart modal
    if (cartIcon) {
        cartIcon.addEventListener('click', openCartModal);
    }

    const closeCartBtn = document.getElementById('closeCart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', closeCartModal);
    }

    const clearCartBtn = document.getElementById('clearCart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }

    const proceedPaymentBtn = document.getElementById('proceedPayment');
    if (proceedPaymentBtn) {
        proceedPaymentBtn.addEventListener('click', openPaymentModal);
    }

    // Payment modal
    const closePaymentBtn = document.getElementById('closePayment');
    if (closePaymentBtn) {
        closePaymentBtn.addEventListener('click', closePaymentModal);
    }

    const cancelPaymentBtn = document.getElementById('cancelPayment');
    if (cancelPaymentBtn) {
        cancelPaymentBtn.addEventListener('click', closePaymentModal);
    }

    const processPaymentBtn = document.getElementById('processPayment');
    if (processPaymentBtn) {
        processPaymentBtn.addEventListener('click', processPayment);
    }

    // Product modal
    const closeProductBtn = document.getElementById('closeProduct');
    if (closeProductBtn) {
        closeProductBtn.addEventListener('click', closeProductModal);
    }

    const cancelBuyBtn = document.getElementById('cancelBuy');
    if (cancelBuyBtn) {
        cancelBuyBtn.addEventListener('click', closeProductModal);
    }

    const addToCartBtn = document.getElementById('addToCart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCartFromModal);
    }

    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.addEventListener('input', calculateTotal);
    }

    // Payment form formatting
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', formatCardNumber);
    }

    const expiryDateInput = document.getElementById('expiryDate');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', formatExpiryDate);
    }

    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) closeCartModal();
        if (e.target === paymentModal) closePaymentModal();
        if (e.target === productModal) closeProductModal();
    });
}

// Tab navigation (only for index.html)
function showTab(tabName) {
    // Update navigation
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-tab') === tabName) {
            link.classList.add('active');
        }
    });

    // Update content
    tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === tabName) {
            content.classList.add('active');
        }
    });
}

// Load products
function loadProducts(category = 'todos') {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    const filteredProducts = category === 'todos'
        ? products
        : products.filter(product => product.category === category);

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem; grid-column: 1/-1;">No hay productos en esta categoría</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.images[0] || './images/products/placeholder.jpg'}" alt="${product.name}" class="product-image"
                     onerror="this.src='./images/products/placeholder.jpg'">
                <div class="product-overlay">
                    <button class="btn-view-details" onclick="openProductDetails(${product.id})">
                        <i class="fas fa-eye"></i> Ver Detalles
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-footer">
                    <div class="product-price">$${product.price}</div>
                    <div class="product-actions">
                        <button class="btn-secondary btn-quick-info" onclick="openProductDetails(${product.id})">
                            <i class="fas fa-info-circle"></i>
                        </button>
                        <button class="btn-primary" onclick="openProductModal(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Comprar
                        </button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Setup category filters
function setupCategoryFilters() {
    const dropdownBtn = document.getElementById('categoryDropdownBtn');
    const dropdownMenu = document.getElementById('categoryDropdownMenu');
    const categoryOptions = document.querySelectorAll('.category-option');
    const selectedCategoryText = document.getElementById('selectedCategoryText');

    if (!dropdownBtn || !dropdownMenu) return;

    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownBtn.classList.toggle('active');
        dropdownMenu.classList.toggle('active');
    });

    categoryOptions.forEach(option => {
        option.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const categoryText = this.querySelector('span').textContent;
            const categoryIcon = this.querySelector('i').className;

            categoryOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');

            selectedCategoryText.textContent = categoryText;
            const iconElement = dropdownBtn.querySelector('.category-selected i');
            iconElement.className = categoryIcon;

            dropdownBtn.classList.remove('active');
            dropdownMenu.classList.remove('active');

            loadProducts(category);
        });
    });

    document.addEventListener('click', function(e) {
        if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownBtn.classList.remove('active');
            dropdownMenu.classList.remove('active');
        }
    });
}

// Product details modal
function openProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const imagesToShow = [];
    for (let i = 0; i < 3; i++) {
        if (product.images[i] && product.images[i].trim() !== '') {
            imagesToShow.push(product.images[i]);
        } else {
            imagesToShow.push('./images/products/placeholder.jpg');
        }
    }

    const detailsModal = document.createElement('div');
    detailsModal.className = 'modal';
    detailsModal.id = 'productDetailsModal';
    detailsModal.innerHTML = `
        <div class="modal-content product-details-content">
            <div class="modal-header">
                <h3>Detalles del Producto</h3>
                <span class="close" onclick="closeProductDetails()">&times;</span>
            </div>
            <div class="modal-body">
                <div class="product-details-grid">
                    <div class="product-details-images-container">
                        <div class="product-details-image main-image">
                            <img src="${imagesToShow[0]}" alt="${product.name}"
                                 onerror="this.src='./images/products/placeholder.jpg'">
                        </div>
                        <div class="product-details-thumbnails">
                            <div class="thumbnail-image">
                                <img src="${imagesToShow[0]}" alt="${product.name}"
                                     onerror="this.src='./images/products/placeholder.jpg'">
                            </div>
                            <div class="thumbnail-image">
                                <img src="${imagesToShow[1]}" alt="${product.name}"
                                     onerror="this.src='./images/products/placeholder.jpg'">
                            </div>
                            <div class="thumbnail-image">
                                <img src="${imagesToShow[2]}" alt="${product.name}"
                                     onerror="this.src='./images/products/placeholder.jpg'">
                            </div>
                        </div>
                    </div>
                    <div class="product-details-info">
                        <h2>${product.name}</h2>
                        <p class="product-details-description">${product.description || 'Descripción no disponible'}</p>

                        <div class="product-details-specs">
                            <div class="spec-item">
                                <i class="fas fa-tag"></i>
                                <span>Precio: <strong>$${product.price}</strong></span>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-shield-alt"></i>
                                <span>Producto de calidad garantizada</span>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-truck"></i>
                                <span>Envío disponible</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" onclick="closeProductDetails()">Cerrar</button>
                <button class="btn-primary" onclick="openProductModal(${product.id}); closeProductDetails();">
                    <i class="fas fa-shopping-cart"></i> Comprar Ahora
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(detailsModal);
    detailsModal.style.display = 'block';

    detailsModal.addEventListener('click', function(e) {
        if (e.target === detailsModal) {
            closeProductDetails();
        }
    });
}

function closeProductDetails() {
    const detailsModal = document.getElementById('productDetailsModal');
    if (detailsModal) {
        detailsModal.remove();
    }
}

// Product modal functions
function openProductModal(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct || !productModal) return;

    document.getElementById('productModalTitle').textContent = currentProduct.name;
    document.getElementById('pricePerUnit').textContent = currentProduct.price;

    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.value = 1;
    }

    calculateTotal();
    productModal.style.display = 'block';
}

function closeProductModal() {
    if (productModal) {
        productModal.style.display = 'none';
    }
    currentProduct = null;
}

function calculateTotal() {
    if (!currentProduct) return;

    const quantityInput = document.getElementById('quantity');
    if (!quantityInput) return;

    const quantity = parseInt(quantityInput.value) || 1;
    const total = currentProduct.price * quantity;

    const totalElement = document.getElementById('purchaseTotal');
    if (totalElement) {
        totalElement.textContent = total;
    }
}

function addToCartFromModal() {
    if (!currentProduct) return;

    const quantityInput = document.getElementById('quantity');
    if (!quantityInput) return;

    const quantity = parseInt(quantityInput.value) || 1;

    if (quantity <= 0) {
        alert('Por favor seleccione una cantidad válida');
        return;
    }

    const cartItem = {
        id: Date.now(),
        productId: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        quantity: quantity,
        total: currentProduct.price * quantity
    };

    cart.push(cartItem);
    saveCartToStorage();
    updateCartCount();
    closeProductModal();

    showNotification('Producto agregado al carrito exitosamente');
}

// Cart functions
function openCartModal() {
    if (!cartModal) return;
    updateCartDisplay();
    cartModal.style.display = 'block';
}

function closeCartModal() {
    if (cartModal) {
        cartModal.style.display = 'none';
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">El carrito está vacío</p>';
        cartTotal.textContent = '0';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Cantidad: ${item.quantity}</p>
                <p>Precio unitario: $${item.price}</p>
            </div>
            <div>
                <div class="cart-item-price">$${item.total}</div>
                <button onclick="removeFromCart(${index})" style="background: #ef4444; color: white; border: none; padding: 0.5rem; border-radius: 3px; cursor: pointer; margin-top: 0.5rem;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
        total += item.total;
    });

    cartTotal.textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartCount();
    updateCartDisplay();
    showNotification('Producto eliminado del carrito');
}

function clearCart() {
    cart = [];
    saveCartToStorage();
    updateCartCount();
    updateCartDisplay();
    showNotification('Carrito vaciado');
}

function updateCartCount() {
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Payment functions
function openPaymentModal() {
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }

    if (!paymentModal) return;

    const total = cart.reduce((sum, item) => sum + item.total, 0);
    const paymentTotalElement = document.getElementById('paymentTotal');
    if (paymentTotalElement) {
        paymentTotalElement.textContent = total;
    }

    closeCartModal();
    paymentModal.style.display = 'block';
}

function closePaymentModal() {
    if (paymentModal) {
        paymentModal.style.display = 'none';
    }
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.reset();
    }
}

function processPayment() {
    const cardNumber = document.getElementById('cardNumber')?.value || '';
    const expiryDate = document.getElementById('expiryDate')?.value || '';
    const cvv = document.getElementById('cvv')?.value || '';
    const cardHolder = document.getElementById('cardHolder')?.value || '';

    if (!cardNumber || !expiryDate || !cvv || !cardHolder) {
        alert('Por favor complete todos los campos');
        return;
    }

    if (cardNumber.replace(/\s/g, '').length !== 16) {
        alert('El número de tarjeta debe tener 16 dígitos');
        return;
    }

    if (cvv.length !== 3) {
        alert('El CVV debe tener 3 dígitos');
        return;
    }

    const processButton = document.getElementById('processPayment');
    if (processButton) {
        processButton.textContent = 'Procesando...';
        processButton.disabled = true;
    }

    setTimeout(() => {
        const total = cart.reduce((sum, item) => sum + item.total, 0);

        alert(`¡Pago procesado exitosamente!\n\nTotal pagado: $${total}\nNúmero de confirmación: ${generateConfirmationNumber()}\n\nGracias por su compra. Nos pondremos en contacto para coordinar la entrega.`);

        cart = [];
        saveCartToStorage();
        updateCartCount();
        closePaymentModal();

        if (processButton) {
            processButton.textContent = 'Procesar Pago';
            processButton.disabled = false;
        }

        showNotification('¡Pago procesado exitosamente!');
    }, 2000);
}

// Utility functions
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('puntoMedicoCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            cart = [];
        }
    }
}

function saveCartToStorage() {
    localStorage.setItem('puntoMedicoCart', JSON.stringify(cart));
}

function formatCardNumber(e) {
    let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formattedValue;
}

function formatExpiryDate(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value;
}

function generateConfirmationNumber() {
    return 'PM' + Date.now().toString().slice(-8);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;

    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Contacto form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (validateForm()) {
                simulateFormSubmission();
            }
        });

        const mapPlaceholders = document.querySelectorAll('.map-placeholder');
        mapPlaceholders.forEach(map => {
            map.addEventListener('click', function() {
                const address = this.getAttribute('data-address');
                window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
            });
        });
    }

    function validateForm() {
        const requiredFields = contactForm.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                showError(field, 'Este campo es obligatorio');
                isValid = false;
            } else {
                clearError(field);
            }
        });

        const emailField = document.getElementById('email');
        if (emailField.value && !isValidEmail(emailField.value)) {
            showError(emailField, 'Por favor ingresa un email válido');
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(field, message) {
        clearError(field);
        field.style.borderColor = '#ef4444';

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '0.8rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;

        field.parentNode.appendChild(errorDiv);
    }

    function clearError(field) {
        field.style.borderColor = '#e5e7eb';
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }

    function simulateFormSubmission() {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;

        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitButton.disabled = true;

        setTimeout(() => {
            showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto.');

            contactForm.reset();

            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    }
});

// Mobile menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navList = document.querySelector('.nav-list');
const navOverlay = document.querySelector('.nav-overlay');
const cartMobile = document.querySelector('.cart-mobile');
const body = document.body;

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navList.classList.toggle('active');
        navOverlay.classList.toggle('active');
        cartMobile.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
}

if (navOverlay) {
    navOverlay.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navList.classList.remove('active');
        navOverlay.classList.remove('active');
        cartMobile.classList.remove('active');
        body.classList.remove('menu-open');
    });
}
