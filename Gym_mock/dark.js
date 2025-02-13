const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
      themeToggleBtn.textContent = 'Switch to Light Mode';
    }

    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark');
      } else {
        themeToggleBtn.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light');
      }
    });