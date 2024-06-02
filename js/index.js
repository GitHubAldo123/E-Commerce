 // JavaScript for dynamic content will go here
        // Example: Adding products to cart
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                // Add product to cart logic here
                alert('Product added to cart!');
            });
        });

// mode collaps pada perangkat mobile 
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarSupportedContent');

    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });
});
 // Example: Adding products to cart
 document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        // Add product to cart logic here
        alert('Product added to cart!');
    });
});