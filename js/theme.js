try {
  const savedTheme = localStorage.getItem('jvm-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    document.documentElement.dataset.theme = savedTheme;
  } else {
    document.documentElement.dataset.theme = 'dark';
  }
} catch {
  // O tema padrão continua disponível quando o navegador bloqueia o armazenamento.
}
