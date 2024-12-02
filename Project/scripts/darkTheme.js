document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'second') {
    document.documentElement.classList.add('second-theme');
  } else {
    document.documentElement.classList.add('default-theme');
  }

  document.getElementById('drop-Item').addEventListener('click', function () {
    const isDefaultTheme = document.documentElement.classList.contains('default-theme');

    if (isDefaultTheme) {
      document.documentElement.classList.remove('default-theme');
      document.documentElement.classList.add('second-theme');
      localStorage.setItem('theme', 'second');
      document.getElementById('drop-Item').innerHTML = `<i class="fas fa-moon"></i> Dark Theme - Off`;
    } else {
      document.documentElement.classList.remove('second-theme');
      document.documentElement.classList.add('default-theme');
      localStorage.setItem('theme', 'default');
      document.getElementById('drop-Item').innerHTML = `<i class="fas fa-sun"></i> Dark Theme - On`;
    }
  });

  window.addEventListener('load', () => {
    const currentTheme = localStorage.getItem('theme') || 'default';
    document.documentElement.classList.add(currentTheme === 'second' ? 'second-theme' : 'default-theme');
    document.getElementById('drop-Item').innerHTML = currentTheme === 'second'
      ? `<i class="fas fa-moon"></i> Dark Theme - Off`
      : `<i class="fas fa-sun"></i> Dark Theme - On`;
  });
});
