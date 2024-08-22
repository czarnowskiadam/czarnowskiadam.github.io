document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navMenu = document.querySelector('.nav-menu');
    const navRight = document.querySelector('.nav-right');
    const menuItems = document.querySelectorAll('.nav-menu li');
    const overlay = document.getElementById('overlay');

    function updateButtonVisibility() {
        if (window.innerWidth <= 1000) {
            menuToggle.style.display = navMenu.classList.contains('show') ? 'none' : 'block';
            menuClose.style.display = navMenu.classList.contains('show') ? 'block' : 'none';
        } else {
            menuToggle.style.display = 'none';
            menuClose.style.display = 'none';
        }
    }

    updateButtonVisibility();

    menuToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
        updateButtonVisibility();
    });

    menuClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
        updateButtonVisibility();
    });

    window.changeViewWithAnimation = function(viewToShow, currentView, switchView) {
        if (viewToShow !== currentView) {
            overlay.classList.add('show');
            setTimeout(() => {
                navMenu.classList.remove('show');
                updateButtonVisibility();
                switchView(viewToShow);

                setTimeout(() => {
                    overlay.classList.remove('show');
                }, 500);
            }, 500);
        } else {
            if (window.innerWidth <= 1000 && navMenu.classList.contains('show')) {
                navMenu.classList.add('closing');
                navRight.classList.add('closing');
                
                setTimeout(() => {
                    navMenu.classList.remove('show');
                    navMenu.classList.remove('closing');
                    navRight.classList.remove('show');
                    navRight.classList.remove('closing');
                    updateButtonVisibility();
                }, 1000);
            } else {
                switchView(viewToShow);
            }
        }
    };

    window.addEventListener('resize', updateButtonVisibility);
});
