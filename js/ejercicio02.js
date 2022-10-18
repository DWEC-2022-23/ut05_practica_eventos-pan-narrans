// Functions
function muestraOculta(c) {
  c.style.display === "none"
    ? c.style.display = "block"
    : c.style.display = "none";
}

function cambiarNombre(e) {
  e.innerHTML === "Ocultar contenidos"
    ? e.innerHTML = "Mostrar contenidos"
    : e.innerHTML = "Ocultar contenidos";
}

// References
const c1 = document.getElementById("contenidos_1");
const c2 = document.getElementById("contenidos_2");
const c3 = document.getElementById("contenidos_3");

const e1 = document.getElementById("enlace_1");
const e2 = document.getElementById("enlace_2");
const e3 = document.getElementById("enlace_3");

// Events
e1.onclick = function () {
  cambiarNombre(e1)
  muestraOculta(c1)
}
e2.onclick = function () {
  cambiarNombre(e2)
  muestraOculta(c2)
}
e3.onclick = function () {
  cambiarNombre(e3)
  muestraOculta(c3)
}