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

    // --- 3. 3D Spotlight Background Tracker ---
    // This updates the CSS variables --mouse-x and --mouse-y globally
    // so the CSS radial-gradient can seamlessly follow the cursor.
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        document.documentElement.style.setProperty('--mouse-x', `${x}px`);
        document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    });

    // --- 4. OSINT Protection: Base64 Email Decoder ---
    // Protects email from automated scraping bots by decoding only on real clicks
    const secureContacts = document.querySelectorAll('.secure-contact');

    secureContacts.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const encodedEmail = this.getAttribute('data-b64');
            if (encodedEmail) {
                // Decodes bWRhbm5pZWxmNTBAZ21haWwuY29t back to mdannielf50@gmail.com
                const decodedEmail = atob(encodedEmail);
                window.location.href = `mailto:${decodedEmail}`;
            }
        });
    });

});