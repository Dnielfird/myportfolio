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

    // --- 2. Smooth Scrolling ---
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

    // --- 3. Custom Interactive Cursor (Beautification) ---
    const cursor = document.getElementById('custom-cursor');

    // Move cursor tracking
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    // Expand cursor when hovering over clickable items
    const interactiveElements = document.querySelectorAll('a, button, .hover-terminal');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursor) {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.classList.add('bg-lightPrimary', 'dark:bg-primary', 'opacity-20');
            }
        });
        el.addEventListener('mouseleave', () => {
            if (cursor) {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.classList.remove('bg-lightPrimary', 'dark:bg-primary', 'opacity-20');
            }
        });
    });

    // --- 4. OSINT Protection: Base64 Email Decoder ---
    // Protects email from automated scraping bots by decoding only on real clicks
    const secureContacts = document.querySelectorAll('.secure-contact');

    secureContacts.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const encodedEmail = this.getAttribute('data-b64');
            if (encodedEmail) {
                // Decode the base64 string (bWRhbm5pZWxmNTBAZ21haWwuY29t -> mdannielf50@gmail.com)
                const decodedEmail = atob(encodedEmail);
                window.location.href = `mailto:${decodedEmail}`;
            }
        });
    });

});