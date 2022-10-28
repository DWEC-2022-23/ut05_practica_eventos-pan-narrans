const div = document.getElementById("numero");

div.onmouseover = function () { div.classList.toggle('ejercicio01'); }
div.onmouseout = function () { div.classList.toggle('ejercicio01'); }

div.addEventListener('dblclick', () => {
  div.innerHTML = div.innerHTML * 3;
})
