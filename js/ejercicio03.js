// Event listeners + body
const body = document.getElementsByTagName("body")[0];
body.addEventListener("click", showClick);
body.addEventListener("mousemove", showMove);
body.addEventListener("keydown", showKey);

// References
// Move
const mMoveScreen = document.getElementById("mMoveScreen");
const mMovePage = document.getElementById("mMovePage");
const mMoveClient = document.getElementById("mMoveClient");

// Click
const mClick = document.getElementById("mClick");
const mClickScreen = document.getElementById("mClickScreen");
const mClickPage = document.getElementById("mClickPage");
const mClickClient = document.getElementById("mClickClient");

// Keyboard
const keyboard = document.getElementById("keyboard");
const char = document.getElementById("char");
const code = document.getElementById("code");

// Functions
function showMove(e) {
  // Return to white background
  mClick.classList.remove('infoYellow');
  keyboard.classList.remove('infoBlue');

  mMoveScreen.innerHTML = `[ ${e.screenX}, ${e.screenY} ]`;
  mMovePage.innerHTML = `[ ${e.pageX}, ${e.pageY} ]`;
  mMoveClient.innerHTML = `[ ${e.clientX}, ${e.clientY} ]`;
}

function showClick(e) {
  // Background color change
  mClick.classList.add('infoYellow');

  // Show info
  mClickScreen.innerHTML = `[ ${e.screenX}, ${e.screenY} ]`;
  mClickPage.innerHTML = `[ ${e.pageX}, ${e.pageY} ]`;
  mClickClient.innerHTML = `[ ${e.clientX}, ${e.clientY} ]`;
}

function showKey(e) {
  // Background color change
  keyboard.classList.add('infoBlue');

  // Show info
  char.innerHTML = `"[ ${e.key} ]"`
  code.innerHTML = `"[ ${e.code} ]"`
}