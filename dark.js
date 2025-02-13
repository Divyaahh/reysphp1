const themeToggle = document.querySelector('.theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        const themeText = themeToggle.querySelector('.theme-text');

        function toggleTheme() {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            
            // Update button icon and text
            if (newTheme === 'dark') {
                themeIcon.className = 'fas fa-moon';
                themeText.textContent = 'Dark Mode';
            } else {
                themeIcon.className = 'fas fa-sun';
                themeText.textContent = 'Light Mode';
            }
        }

        themeToggle.addEventListener('click', toggleTheme);