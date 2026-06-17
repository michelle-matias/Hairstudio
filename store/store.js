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

// Render Products
function renderProducts(filteredProducts = products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    filteredProducts.forEach(product => {
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
}

// Filter Products
function filterProducts(category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(product => product.category === category);
}



// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Render all products on load
    renderProducts();

    // Add click event to tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Filter and render products
            const category = tab.getAttribute('data-category');
            const filtered = filterProducts(category);
            renderProducts(filtered);
        });
    });
});



