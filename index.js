  document.getElementById('hamburger').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.toggle('open');
  });

  document.getElementById('toggleTheme').addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  });