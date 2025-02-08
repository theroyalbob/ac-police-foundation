document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        // Optional: Toggle aria-expanded for accessibility
        const isExpanded = navLinks.classList.contains('active');
        mobileMenu.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnButton = mobileMenu.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnButton && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenu.setAttribute('aria-expanded', false);
        }
    });
}); 