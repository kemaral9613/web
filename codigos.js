// codigos.js
// Script para resaltar y navegar a palabras clave en la página

document.querySelector('form[role="search"]').addEventListener('submit', function(e) {
  e.preventDefault();
  // Elimina resaltados anteriores
  document.querySelectorAll('.search-highlight').forEach(el => {
    el.outerHTML = el.innerText;
  });
  const keyword = this.querySelector('input[type="search"]').value.trim();
  if (!keyword) return;
  // Busca y resalta coincidencias en el main
  const main = document.querySelector('main');
  const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  let found = false;
  main.innerHTML = main.innerHTML.replace(regex, (match) => {
    found = true;
    return `<span class='search-highlight'>${match}</span>`;
  });
  // Si hay coincidencia, hacer scroll
  if (found) {
    const first = document.querySelector('.search-highlight');
    if (first) first.scrollIntoView({behavior: 'smooth', block: 'center'});
  }
});
