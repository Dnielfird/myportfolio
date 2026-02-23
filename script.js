document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Theme Toggle Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    themeToggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');

        if (htmlElement.classList.contains('dark')) {
            themeIcon.classList.remove('fa-moon', 'text-gray-600');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon', 'text-gray-600');
        }
    });

    // --- 2. Mobile Menu Toggle Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const menuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');

        // Change hamburger icon to X when opened
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        } else {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        }
    });

    // Close mobile menu automatically when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });

    // --- 3. Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 4. 3D Spotlight Background Tracker ---
    // Safely checks if user is using a touch device (prevents stuck spotlight on mobile)
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (!isTouchDevice) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            document.documentElement.style.setProperty('--mouse-x', `${x}px`);
            document.documentElement.style.setProperty('--mouse-y', `${y}px`);
        });
    }

    // --- 5. OSINT Protection: Base64 Email Decoder ---
    const secureContacts = document.querySelectorAll('.secure-contact');

    secureContacts.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const encodedEmail = this.getAttribute('data-b64');
            if (encodedEmail) {
                const decodedEmail = atob(encodedEmail);
                window.location.href = `mailto:${decodedEmail}`;
            }
        });
    });

});