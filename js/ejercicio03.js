// Event listeners + body
const body = document.getElementsByTagName("body")[0];
body.addEventListener("click", showClick);
body.addEventListener("mousemove", showMove);
body.addEventListener("keydown", showKey);


// References
const box = document.getElementById("box");
const title = document.getElementById("title");
const legend = document.getElementById("legend");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");


// Functions
function showMove(e) {
  title.innerHTML = "Ratón";
  legend.innerHTML = "Se mueve el ratón.";

  p1.innerHTML = `Pantalla : [ ${e.screenX}, ${e.screenY} ]`;
  p2.innerHTML = `Página   : [ ${e.pageX}, ${e.pageY} ]`;

  box.classList.remove('infoYellow');
  box.classList.remove('infoBlue');
}

function showClick(e) {
  title.innerHTML = "Ratón";
  legend.innerHTML = "Se hace click con el ratón.";

  p1.innerHTML = `Pantalla : [ ${e.screenX}, ${e.screenY} ]`;
  p2.innerHTML = `Página   : [ ${e.pageX}, ${e.pageY} ]`;
  //`[ ${e.clientX}, ${e.clientY} ]`;

  box.classList.add('infoYellow');
}

function showKey(e) {
  title.innerHTML = "Teclado";
  legend.innerHTML = "Se pulsa una tecla.";

  p1.innerHTML = `Carácter : "[ ${e.key} ]"`;
  p2.innerHTML = `Código   : "[ ${e.code} ]"`;

  box.classList.add('infoBlue');
}