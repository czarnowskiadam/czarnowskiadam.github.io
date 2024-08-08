document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navMenu = document.querySelector('.nav-menu');

    // Function to handle button display based on screen size
    function updateButtonVisibility() {
        if (window.innerWidth <= 1000) {
            // Mobile view
            menuToggle.style.display = navMenu.classList.contains('show') ? 'none' : 'block';
            menuClose.style.display = navMenu.classList.contains('show') ? 'block' : 'none';
        } else {
            // Desktop view
            menuToggle.style.display = 'none';
            menuClose.style.display = 'none';
        }
    }

    // Initial button state
    updateButtonVisibility();

    // Handle button clicks
    menuToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
        updateButtonVisibility();
    });

    menuClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
        updateButtonVisibility();
    });

    // Handle window resize
    window.addEventListener('resize', updateButtonVisibility);
});
