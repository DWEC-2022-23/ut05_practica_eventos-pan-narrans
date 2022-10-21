
const body = document.getElementsByTagName("body")[0];
body.addEventListener("keydown", showKey);
body.addEventListener("click", showClick);



const mClickBrowser = document.getElementById("mClickBrowser");
const mClickPage = document.getElementById("mClickPage");

function showClick(e) {
  mClickBrowser.innerHTML = `
  Screen X/Y: ${e.screenX}, ${e.screenY}
  Page X/Y: ${e.pageX}, ${e.pageY}
  Client X/Y: ${e.clientX}, ${e.clientY}`
  mClickPage.innerHTML = "[" + e.screenX + "]"
}

const char = document.getElementById("char");
const code = document.getElementById("code");

function showKey(e) {
  char.innerHTML = "[" + e.key + "]"
  code.innerHTML = "[" + e.code + "]"
}