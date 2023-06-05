const startScreen = document.getElementById('startUp')
const termianl = document.getElementById('terminal')
const desktop = document.getElementById('desktop')


setTimeout(() => {
    startScreen.classList.add('displayNone')
    termianl.classList.add('displayBlock')

    setTimeout(() => {
        termianl.classList.remove('displayBlock')
        desktop.classList.add('displayFlex')
    }, 5000);
}, 5000);


const deployWindow = document.getElementById("deploy-window");

function handleRightClick(event) {
  event.preventDefault();

  deployWindow.style.display = "block";
  deployWindow.style.left = event.pageX + "px";
  deployWindow.style.top = event.pageY + "px";
}

function hideDeployWindow() {
  deployWindow.style.display = "none";
}

document.addEventListener("contextmenu", handleRightClick); 
document.addEventListener("click", hideDeployWindow); 


const properties = document.getElementById('properties')
let propOpened = false;

function Properties(event) {
  event.preventDefault();

  if (!propOpened) {
    properties.style.display = "flex";
    properties.style.left = event.pageX + "px";
    properties.style.top = event.pageY - 300 + "px";
  }
}

function xButton(){
  properties.style.display = 'none';
}

const propopen = document.getElementById('propopen').addEventListener('click', Properties)
const propXButton = document.getElementById('propXButton').addEventListener('click', xButton)