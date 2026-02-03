// products.js - Versión optimizada y funcional
// Inicialización completa del sistema de productos

// Variables globales
let cart = JSON.parse(localStorage.getItem('puntoMedicoCart')) || [];
let currentProduct = null;
let selectedCategory = 'todos';
let currentSort = 'default';
let searchTerm = '';
let minPrice = 0;
let maxPrice = 1000;

// Datos de productos
const products = [
    {
        id: 1,
        name: "Aguja Magnum Automática Corte Trucut 12ga x 10cm",
        description: "Aguja de biopsia automática con corte trucut, calibre 12, longitud 10cm.",
        category: "agujas-biopsia",
        price: 450,
        brand: "BD",
        stock: 25,
        rating: 4.8,
        images: [
            "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
        ],
        isFeatured: true,
        specs: ["Calibre: 12ga", "Longitud: 10cm", "Estéril", "Uso único"]
    },
    {
        id: 2,
        name: "Catéter Venoso Central Multicath",
        description: "Catéter venoso central de múltiples lúmenes para terapia intensiva.",
        category: "cateteres",
        price: 400,
        brand: "BD",
        stock: 18,
        rating: 4.7,
        images: [
            "https://images.unsplash.com/photo-1584467735871-8db9ac8adf8d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
        ],
        isFeatured: true,
        specs: ["Triple lumen", "Policarbonato", "Radiopaco", "Estéril"]
    },
    {
        id: 3,
        name: "Drenaje Blake",
        description: "Sistema de drenaje con múltiples perforaciones para drenaje eficiente.",
        category: "drenajes",
        price: 400,
        brand: "Covidien",
        stock: 28,
        rating: 4.6,
        images: [
            "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1516549655669-df65cb6368d8?w=400&h=300&fit=crop"
        ],
        isFeatured: true,
        specs: ["Silicona", "Multiperforado", "Estéril", "Uso único"]
    },
    {
        id: 4,
        name: "Aguja de Aspiración FNA 18G | 15cm",
        description: "Aguja fina para aspiración de tejidos blandos, ideal para citologías.",
        category: "agujas-biopsia",
        price: 350,
        brand: "Terumo",
        stock: 35,
        rating: 4.5,
        images: [
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
        ],
        isFeatured: false,
        specs: ["Calibre: 18G", "Longitud: 15cm", "Estéril", "Uso único"]
    },
    {
        id: 5,
        name: "Power PICC",
        description: "Catéter central de inserción periférica para terapia prolongada.",
        category: "cateteres",
        price: 500,
        brand: "BD",
        stock: 15,
        rating: 4.9,
        images: [
            "https://images.unsplash.com/photo-1584467735871-8db9ac8adf8d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
        ],
        isFeatured: true,
        specs: ["Power injectable", "PICC", "Radiopaco", "Estéril"]
    },
    {
        id: 6,
        name: "Apósito con Clorexidina",
        description: "Apósito antimicrobiano con clorexidina para catéteres.",
        category: "otros-materiales",
        price: 150,
        brand: "BD",
        stock: 100,
        rating: 4.4,
        images: [
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
        ],
        isFeatured: false,
        specs: ["Antimicrobiano", "Clorexidina", "Estéril", "Uso único"]
    },
    {
        id: 7,
        name: "Infusor Baxter 48 HRS",
        description: "Sistema de infusión continua por 48 horas.",
        category: "otros-materiales",
        price: 400,
        brand: "Covidien",
        stock: 25,
        rating: 4.7,
        images: [
            "https://images.unsplash.com/photo-1584467735871-8db9ac8adf8d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
        ],
        isFeatured: true,
        specs: ["Infusión continua", "48 horas", "Estéril", "Uso único"]
    },
    {
        id: 8,
        name: "Electrocauterio",
        description: "Sistema de electrocirugía para corte y coagulación.",
        category: "otros-materiales",
        price: 550,
        brand: "Covidien",
        stock: 14,
        rating: 4.8,
        images: [
            "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop"
        ],
        isFeatured: true,
        specs: ["Electrocirugía", "Corte/Coagulación", "Reutilizable"]
    }
];

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - Inicializando sistema de productos...');
    
    // Ocultar preloader inmediatamente
    hidePreloader();
    
    // Cargar productos después de un pequeño delay
    setTimeout(() => {
        initializeProducts();
        updateCartCount();
        setupEventListeners();
    }, 100);
});

// Ocultar preloader
function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
    console.log('Preloader ocultado');
}

// Inicializar productos
function initializeProducts() {
    console.log('Inicializando productos...');
    loadProducts();
    loadFeaturedProducts();
    updateProductCount();
}

// Cargar productos
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) {
        console.error('No se encontró el contenedor de productos');
        return;
    }

    // Aplicar filtros
    let filteredProducts = applyFilters(products);
    
    // Mostrar estado vacío si no hay productos
    const emptyState = document.getElementById('emptyState');
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }
    
    if (emptyState) emptyState.style.display = 'none';
    
    // Renderizar productos
    productsGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    console.log(`${filteredProducts.length} productos cargados`);
}

// Aplicar filtros
function applyFilters(productList) {
    let filtered = [...productList];
    
    // Filtrar por categoría
    if (selectedCategory !== 'todos') {
        filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filtrar por búsqueda
    if (searchTerm) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Filtrar por precio
    filtered = filtered.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );
    
    // Ordenar
    switch(currentSort) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filtered.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }
    
    return filtered;
}

// Crear tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Determinar badges
    let badges = '';
    if (product.isFeatured) {
        badges = '<div class="product-badge">Destacado</div>';
    }
    
    card.innerHTML = `
        ${badges}
        <div class="product-image">
            <img src="${product.images[0]}" alt="${product.name}"
                 onerror="this.src='https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop'">
        </div>
        <div class="product-content">
            <div class="product-category">${getCategoryName(product.category)}</div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description.substring(0, 80)}...</p>
            
            <div class="product-specs">
                ${product.specs.slice(0, 2).map(spec => 
                    `<span class="product-spec">${spec}</span>`
                ).join('')}
            </div>
            
            <div class="product-footer">
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="product-action-btn" onclick="openQuickView(${product.id})" title="Vista rápida">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="product-action-btn" onclick="addToCartDirect(${product.id})" title="Agregar al carrito">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Cargar productos destacados
function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;
    
    const featuredProducts = products.filter(product => product.isFeatured);
    
    featuredGrid.innerHTML = '';
    featuredProducts.forEach(product => {
        const featuredProduct = document.createElement('div');
        featuredProduct.className = 'featured-product';
        
        featuredProduct.innerHTML = `
            <div class="featured-product-image">
                <img src="${product.images[0]}" alt="${product.name}"
                     onerror="this.src='https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop'">
            </div>
            <h4>${product.name}</h4>
            <div class="featured-product-price">$${product.price}</div>
            <button class="btn btn-primary" onclick="openProductModal(${product.id})">
                Ver detalles
            </button>
        `;
        
        featuredGrid.appendChild(featuredProduct);
    });
}

// Obtener nombre de categoría
function getCategoryName(category) {
    const categories = {
        'agujas-biopsia': 'Agujas para Biopsia',
        'cateteres': 'Catéteres',
        'drenajes': 'Drenajes',
        'otros-materiales': 'Materiales Quirúrgicos'
    };
    return categories[category] || category;
}

// Actualizar contador de productos
function updateProductCount() {
    const productCount = document.getElementById('productCount');
    if (productCount) {
        const filteredProducts = applyFilters(products);
        productCount.textContent = `${filteredProducts.length} productos`;
    }
}

// Configurar event listeners
function setupEventListeners() {
    console.log('Configurando event listeners...');
    
    // Buscar producto
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchTerm = this.value;
            loadProducts();
            updateProductCount();
        });
    }
    
    // Filtros por categoría
    const categoryFilters = document.querySelectorAll('.filter-tag');
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remover clase active de todos
            categoryFilters.forEach(f => f.classList.remove('active'));
            // Agregar clase active al clickeado
            this.classList.add('active');
            // Actualizar categoría seleccionada
            selectedCategory = this.dataset.category || 'todos';
            loadProducts();
            updateProductCount();
        });
    });
    
    // Ordenar productos
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            loadProducts();
        });
    }
    
    // Resetear filtros
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }
    
    // Carrito
    const cartToggle = document.querySelector('.cart-toggle');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartClose = document.querySelector('.cart-sidebar-close');
    
    if (cartToggle) {
        cartToggle.addEventListener('click', openCart);
    }
    
    if (cartClose) {
        cartClose.addEventListener('click', closeCart);
    }
    
    // Vaciar carrito
    const clearCartBtn = document.getElementById('clearCart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }
    
    // Checkout
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
    
    // Search toggle
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            searchOverlay.classList.add('active');
        });
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });
    }
    
    // Menú móvil
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }
    
    // Cerrar toast
    const toastClose = document.querySelector('.toast-close');
    if (toastClose) {
        toastClose.addEventListener('click', hideToast);
    }
    
    console.log('Event listeners configurados');
}

// Funciones del carrito
function addToCartDirect(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Verificar si ya está en el carrito
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            id: Date.now(),
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            total: product.price,
            image: product.images[0]
        });
    }
    
    saveCart();
    updateCartCount();
    updateCartDisplay();
    showToast(`${product.name} agregado al carrito`);
}

function openCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        updateCartDisplay();
        cartSidebar.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartEmptyState = document.getElementById('cartEmptyState');
    const cartFooter = document.getElementById('cartSidebarFooter');
    
    if (!cartItems || !cartEmptyState || !cartFooter) return;
    
    if (cart.length === 0) {
        cartItems.style.display = 'none';
        cartEmptyState.style.display = 'block';
        cartFooter.style.display = 'none';
        return;
    }
    
    cartItems.style.display = 'block';
    cartEmptyState.style.display = 'none';
    cartFooter.style.display = 'block';
    
    // Renderizar items del carrito
    cartItems.innerHTML = '';
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}"
                     onerror="this.src='https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop'">
            </div>
            <div class="cart-item-info">
                <h5>${item.name}</h5>
                <div class="cart-item-price">$${item.price}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateCartQuantity(${index}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${index}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItems.appendChild(cartItem);
        subtotal += item.total;
    });
    
    // Calcular envío y total
    const shipping = subtotal >= 500 ? 0 : 20;
    const total = subtotal + shipping;
    
    // Actualizar resumen
    document.getElementById('cartSubtotal').textContent = subtotal;
    document.getElementById('cartShipping').textContent = shipping;
    document.getElementById('cartTotal').textContent = total;
}

function updateCartQuantity(index, change) {
    if (!cart[index]) return;
    
    const newQuantity = cart[index].quantity + change;
    if (newQuantity < 1) {
        removeFromCart(index);
        return;
    }
    
    cart[index].quantity = newQuantity;
    cart[index].total = cart[index].price * newQuantity;
    
    saveCart();
    updateCartCount();
    updateCartDisplay();
}

function removeFromCart(index) {
    if (cart[index]) {
        const productName = cart[index].name;
        cart.splice(index, 1);
        saveCart();
        updateCartCount();
        updateCartDisplay();
        showToast(`${productName} eliminado del carrito`);
    }
}

function clearCart() {
    if (cart.length > 0) {
        cart = [];
        saveCart();
        updateCartCount();
        updateCartDisplay();
        showToast('Carrito vaciado');
    }
}

function saveCart() {
    localStorage.setItem('puntoMedicoCart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Animación
        cartCount.classList.add('updated');
        setTimeout(() => {
            cartCount.classList.remove('updated');
        }, 300);
    }
}

// Funciones de productos
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    const quickViewModal = document.getElementById('quickViewModal');
    const quickViewContent = document.getElementById('quickViewContent');
    
    if (!quickViewModal || !quickViewContent) return;
    
    quickViewContent.innerHTML = `
        <div class="quick-view-image">
            <img src="${product.images[0]}" alt="${product.name}"
                 onerror="this.src='https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop'">
        </div>
        <div class="quick-view-info">
            <h3>${product.name}</h3>
            <div class="quick-view-price">$${product.price}</div>
            <p class="quick-view-description">${product.description}</p>
            
            <div class="quick-view-specs">
                ${product.specs.map(spec => `
                    <div class="quick-view-spec">
                        <span>${spec.split(':')[0]}</span>
                        <span>${spec.split(':')[1] || spec}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="quick-view-actions">
                <button class="btn btn-primary" onclick="addToCartDirect(${product.id}); closeQuickView();">
                    <i class="fas fa-cart-plus"></i>
                    Agregar al carrito
                </button>
            </div>
        </div>
    `;
    
    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    const quickViewModal = document.getElementById('quickViewModal');
    if (quickViewModal) {
        quickViewModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    currentProduct = null;
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    const productModal = document.getElementById('productModal');
    const productDetailContent = document.getElementById('productDetailContent');
    
    if (!productModal || !productDetailContent) return;
    
    productDetailContent.innerHTML = `
        <div class="product-detail-images">
            <div class="main-image">
                <img src="${product.images[0]}" alt="${product.name}"
                     onerror="this.src='https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop'">
            </div>
        </div>
        <div class="product-detail-info">
            <h2>${product.name}</h2>
            <div class="product-detail-price">$${product.price}</div>
            
            <p class="product-detail-description">${product.description}</p>
            
            <div class="product-detail-specs">
                <h4>Especificaciones</h4>
                <ul>
                    ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>
            
            <div class="product-detail-actions">
                <button class="btn btn-primary" onclick="addToCartDirect(${product.id}); closeProductModal();">
                    <i class="fas fa-cart-plus"></i>
                    Agregar al carrito
                </button>
                <button class="btn btn-secondary" onclick="closeProductModal()">
                    Cancelar
                </button>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    currentProduct = null;
}

// Resetear filtros
function resetFilters() {
    selectedCategory = 'todos';
    searchTerm = '';
    currentSort = 'default';
    minPrice = 0;
    maxPrice = 1000;
    
    // Resetear UI
    const categoryFilters = document.querySelectorAll('.filter-tag');
    categoryFilters.forEach(filter => {
        filter.classList.remove('active');
        if (filter.dataset.category === 'todos') {
            filter.classList.add('active');
        }
    });
    
    const searchInput = document.getElementById('productSearch');
    if (searchInput) searchInput.value = '';
    
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'default';
    
    loadProducts();
    updateProductCount();
    showToast('Filtros restablecidos');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showToast('El carrito está vacío');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.total, 0);
    const shipping = total >= 500 ? 0 : 20;
    const orderTotal = total + shipping;
    
    // Simular proceso de checkout
    showToast('Procesando pedido...');
    
    setTimeout(() => {
        const orderNumber = 'PM' + Date.now().toString().slice(-8);
        
        // Mostrar confirmación
        alert(`¡Pedido confirmado!\n\nNúmero de orden: ${orderNumber}\nTotal: $${orderTotal}\n\nTe contactaremos para coordinar la entrega.`);
        
        // Vaciar carrito
        cart = [];
        saveCart();
        updateCartCount();
        closeCart();
        
        showToast('¡Pedido completado exitosamente!');
    }, 1500);
}

// Toast notifications
function showToast(message) {
    const toast = document.getElementById('notificationToast');
    const toastMessage = document.querySelector('.toast-message');
    
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        // Auto-ocultar después de 3 segundos
        setTimeout(hideToast, 3000);
    }
}

function hideToast() {
    const toast = document.getElementById('notificationToast');
    if (toast) {
        toast.classList.remove('show');
    }
}

// Cerrar modales al hacer clic fuera
document.addEventListener('click', function(e) {
    // Quick View Modal
    const quickViewModal = document.getElementById('quickViewModal');
    if (quickViewModal && quickViewModal.classList.contains('active')) {
        if (e.target === quickViewModal || e.target.closest('.modal-close')) {
            closeQuickView();
        }
    }
    
    // Product Modal
    const productModal = document.getElementById('productModal');
    if (productModal && productModal.classList.contains('active')) {
        if (e.target === productModal || e.target.closest('.modal-close')) {
            closeProductModal();
        }
    }
    
    // Cart Sidebar
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar && cartSidebar.classList.contains('active')) {
        if (e.target === cartSidebar || e.target.closest('.cart-sidebar-backdrop')) {
            closeCart();
        }
    }
    
    // Search Overlay
    const searchOverlay = document.querySelector('.search-overlay');
    if (searchOverlay && searchOverlay.classList.contains('active')) {
        if (e.target === searchOverlay || e.target.closest('.search-close')) {
            searchOverlay.classList.remove('active');
        }
    }
});

// Exportar funciones para uso global
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.addToCartDirect = addToCartDirect;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;

console.log('Sistema de productos inicializado correctamente');