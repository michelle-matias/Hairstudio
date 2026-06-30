// Initialize tab functionality FIRST (before async operations)
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const serviceCategories = document.querySelectorAll('.service-category');

    if (tabButtons.length === 0) {
        console.error('No tab buttons found');
        return;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            console.log('Clicked tab:', category);

            // Remove active class from all buttons and categories
            tabButtons.forEach(btn => btn.classList.remove('active'));
            serviceCategories.forEach(section => section.classList.remove('active'));

            // Add active class to clicked button and corresponding category
            this.classList.add('active');
            const targetCategory = document.getElementById(category);
            if (targetCategory) {
                targetCategory.classList.add('active');
                // Smooth scroll to content
                setTimeout(() => {
                    const serviceContent = document.querySelector('.services-content');
                    if (serviceContent) {
                        serviceContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            } else {
                console.error('Category not found:', category);
            }
        });
    });

    console.log('Tabs initialized successfully');
}

document.addEventListener('DOMContentLoaded', initializeTabs);
