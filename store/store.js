// Product Data
const products = [
    {
        id: 1,
        name: 'Premium Hair Serum',
        category: 'serums',
        price: 29.99,
        description: 'Sérum luxuoso para cabelos danificados',
        image: '../pictures/serum.jpg'
    },
    {
        id: 2,
        name: 'Shampoo Luxuoso',
        category: 'shampoo',
        price: 24.99,
        description: 'Limpeza profunda e delicada',
        image: '../pictures/serum.jpg'
    },
    {
        id: 3,
        name: 'Condicionador Profissional',
        category: 'conditioner',
        price: 26.99,
        description: 'Hidratação intensa para todos os tipos',
        image: '../pictures/serum.jpg'
    },
    {
        id: 4,
        name: 'Máscara Capilar',
        category: 'conditioner',
        price: 34.99,
        description: 'Tratamento regenerador semanal',
        image: '../pictures/serum.jpg'
    },
    {
        id: 5,
        name: 'Óleo Arganita',
        category: 'serums',
        price: 39.99,
        description: 'Óleo puro de Arganita premium',
        image: '../pictures/serum.jpg'
    },
    {
        id: 6,
        name: 'Spray Protetor Térmico',
        category: 'styling',
        price: 22.99,
        description: 'Proteção até 230°C',
        image: '../pictures/serum.jpg'
    },
    {
        id: 7,
        name: 'Leave-In Conditioner',
        category: 'conditioner',
        price: 28.99,
        description: 'Condicionador sem enxague',
        image: '../pictures/serum.jpg'
    },
    {
        id: 8,
        name: 'Sérum Reparador',
        category: 'serums',
        price: 35.99,
        description: 'Repara pontas duplas',
        image: '../pictures/serum.jpg'
    },
    {
        id: 9,
        name: 'Spray Brilho',
        category: 'styling',
        price: 19.99,
        description: 'Brilho instantâneo',
        image: '../pictures/serum.jpg'
    },
    {
        id: 10,
        name: 'Tratamento Intensivo',
        category: 'serums',
        price: 42.99,
        description: 'Tratamento profundo semanal',
        image: '../pictures/serum.jpg'
    },
    {
        id: 11,
        name: 'Escova Volumizadora',
        category: 'styling',
        price: 31.99,
        description: 'Cria volume e textura',
        image: '../pictures/serum.jpg'
    },
    {
        id: 12,
        name: 'Mousse Modelador',
        category: 'styling',
        price: 21.99,
        description: 'Fixação leve e flexível',
        image: '../pictures/serum.jpg'
    },
    {
        id: 13,
        name: 'Gel Fixador Forte',
        category: 'styling',
        price: 18.99,
        description: 'Fixação máxima e brilho',
        image: '../pictures/serum.jpg'
    },
    {
        id: 14,
        name: 'Tónico Capilar',
        category: 'shampoo',
        price: 27.99,
        description: 'Fortalece raízes',
        image: '../pictures/serum.jpg'
    },
    {
        id: 15,
        name: 'Creme Noturno',
        category: 'serums',
        price: 33.99,
        description: 'Tratamento overnight',
        image: '../pictures/serum.jpg'
    }
];

const PRODUCTS_PER_PAGE = 6;

const storeState = {
    category: 'all',
    searchTerm: '',
    currentPage: 1
};

function getFilteredProducts() {
    const normalizedSearch = storeState.searchTerm.trim().toLowerCase();

    return products.filter(product => {
        const matchesCategory = storeState.category === 'all' || product.category === storeState.category;
        const searchableText = `${product.name} ${product.category} ${product.description}`.toLowerCase();
        const matchesSearch = normalizedSearch === '' || searchableText.includes(normalizedSearch);

        return matchesCategory && matchesSearch;
    });
}

// Render Products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const emptyMessage = document.getElementById('productsEmpty');
    const filteredProducts = getFilteredProducts();
    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));

    if (storeState.currentPage > totalPages) {
        storeState.currentPage = totalPages;
    }

    const startIndex = (storeState.currentPage - 1) * PRODUCTS_PER_PAGE;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

    grid.innerHTML = '';
    emptyMessage.hidden = filteredProducts.length > 0;

    paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">€${product.price.toFixed(2)}</p>
            </div>
        `;
        grid.appendChild(productCard);
    });

    renderPagination(totalPages, filteredProducts.length);
}

function renderPagination(totalPages, resultCount) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    if (resultCount <= PRODUCTS_PER_PAGE) {
        pagination.hidden = true;
        return;
    }

    pagination.hidden = false;

    const previousButton = createPaginationButton('Previous', storeState.currentPage - 1);
    previousButton.disabled = storeState.currentPage === 1;
    pagination.appendChild(previousButton);

    for (let page = 1; page <= totalPages; page++) {
        const pageButton = createPaginationButton(page, page);
        pageButton.classList.toggle('active', page === storeState.currentPage);
        pageButton.setAttribute('aria-current', page === storeState.currentPage ? 'page' : 'false');
        pagination.appendChild(pageButton);
    }

    const nextButton = createPaginationButton('Next', storeState.currentPage + 1);
    nextButton.disabled = storeState.currentPage === totalPages;
    pagination.appendChild(nextButton);
}

function createPaginationButton(label, page) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'pagination-button';
    button.textContent = label;
    button.addEventListener('click', () => {
        storeState.currentPage = page;
        renderProducts();
        document.querySelector('.shop-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return button;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Render all products on load
    renderProducts();

    const searchInput = document.getElementById('productSearch');
    searchInput.addEventListener('input', () => {
        storeState.searchTerm = searchInput.value;
        storeState.currentPage = 1;
        renderProducts();
    });

    // Add click event to tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Filter and render products
            storeState.category = tab.getAttribute('data-category');
            storeState.currentPage = 1;
            renderProducts();
        });
    });
});


