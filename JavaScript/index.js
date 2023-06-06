// const startScreen = document.getElementById('startUp')
// const termianl = document.getElementById('terminal')
const desktop = document.getElementById('desktop')


// setTimeout(() => {
//     startScreen.classList.add('displayNone')
//     termianl.classList.add('displayBlock')

//     setTimeout(() => {
//         termianl.classList.remove('displayBlock')
//         desktop.classList.add('displayFlex')
//     }, 5000);
// }, 5000);


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

$(document).ready(function() {
  var isDragging = false;
  var startPosX;
  var startPosY;
  var startWindowPosX;
  var startWindowPosY;

  $("#displayHeader").mousedown(function(event) {
      isDragging = true;
      startPosX = event.pageX;
      startPosY = event.pageY;
      startWindowPosX = $("#properties").offset().left;
      startWindowPosY = $("#properties").offset().top;
  });

  $(document).mousemove(function(event) {
      if (isDragging) {
          var offsetX = event.pageX - startPosX;
          var offsetY = event.pageY - startPosY;
          var newWindowPosX = startWindowPosX + offsetX;
          var newWindowPosY = startWindowPosY + offsetY;
          $("#properties").offset({ top: newWindowPosY, left: newWindowPosX });
      }
  });

  $(document).mouseup(function() {
      isDragging = false;
  });
});

const refresh = document.getElementById('refresh').addEventListener('click', () => {
  document.querySelectorAll('.icons').forEach(icon => {
    icon.classList.add('displayNone');
    setTimeout(() => {
      icon.classList.remove('displayNone')
    }, 200);
  })
});


const screens = document.getElementById('screen');

const noneElements = document.querySelectorAll('.none');

noneElements.forEach((element) => {
  element.addEventListener('click', () => {
    const value = element.getAttribute('value');

    screens.style.background = `url(assets/backgrounds/${value}.jpg)`;
    screens.style.backgroundSize = 'cover';
    screens.style.backgroundRepeat = 'no-repeat';

    localStorage.setItem('selectedScreenBackground', value);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const selectedScreenBackground = localStorage.getItem('selectedScreenBackground');
  if (selectedScreenBackground) {
    screens.style.background = `url(assets/backgrounds/${selectedScreenBackground}.jpg)`;
    screens.style.backgroundSize = 'cover';
    screens.style.backgroundRepeat = 'no-repeat';
  }
});

const okay = document.getElementById('okay').addEventListener('click', () => {
  desktop.style.background = screens.style.background;
  properties.style.display = 'none';

  const selectedDesktopBackground = screens.style.background;
  localStorage.setItem('selectedDesktopBackground', selectedDesktopBackground);
});

const apply = document.getElementById('apply').addEventListener('click', () => {
  desktop.style.background = screens.style.background;

  const selectedDesktopBackground = screens.style.background;
  localStorage.setItem('selectedDesktopBackground', selectedDesktopBackground);
});

document.addEventListener('DOMContentLoaded', () => {
  const selectedDesktopBackground = localStorage.getItem('selectedDesktopBackground');
  if (selectedDesktopBackground) {
    desktop.style.background = selectedDesktopBackground;
  }
});
