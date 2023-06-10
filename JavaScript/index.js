const startScreen = document.getElementById('startUp')
const termianl = document.getElementById('terminal')
const desktop = document.getElementById('desktop')

function loading() {
  setTimeout(() => {
    startScreen.classList.add('displayNone')
    termianl.classList.add('displayBlock')

    setTimeout(() => {
      termianl.classList.remove('displayBlock')
      desktop.classList.add('displayFlex')
    }, 5000);
  }, 5000);
}

loading();


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

function xButton() {
  properties.style.display = 'none';
}

const propopen = document.getElementById('propopen').addEventListener('click', Properties)
const propXButton = document.getElementById('propXButton').addEventListener('click', xButton)

$(document).ready(function () {
  var isDragging = false;
  var startPosX;
  var startPosY;
  var startWindowPosX;
  var startWindowPosY;

  $(".moved").mousedown(function (event) {
    isDragging = true;
    startPosX = event.pageX;
    startPosY = event.pageY;
    var $element = $(this);
    startWindowPosX = $element.offset().left;
    startWindowPosY = $element.offset().top;
  });

  $(document).mousemove(function (event) {
    if (isDragging) {
      var offsetX = event.pageX - startPosX;
      var offsetY = event.pageY - startPosY;
      var newWindowPosX = startWindowPosX + offsetX;
      var newWindowPosY = startWindowPosY + offsetY;
      $(".moved").offset({ top: newWindowPosY, left: newWindowPosX });
    }
  });

  $(document).mouseup(function () {
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

const cancel = document.getElementById('cancel').addEventListener('click', () => {
  properties.style.display = 'none'
})

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

let timeFooter = document.getElementById("currentTime");

function updateTime() {
  let currentTime = new Date();
  let formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  timeFooter.textContent = formattedTime;
}

updateTime();
setInterval(updateTime, 1000);

const explorerMain = document.getElementById('explorer');
const explorerLogo = document.getElementById('explorerClickLogo').addEventListener('dblclick', () => {
  explorerMain.style.display = 'flex';
})

const minimizeExplorer = document.getElementById('minimizeExplorer').addEventListener('click', () => {
  explorerMain.style.display = 'none';
})
const quitExplorer = document.getElementById('quitExplorer').addEventListener('click', () => {
  explorerMain.style.display = 'none';
})

let flag = false;
function resized() {
  document.querySelectorAll('.size').forEach(allWindows => {
    document.querySelectorAll('.resizeClick').forEach(reiszeButtons => {
      reiszeButtons.addEventListener('click', () => {
        if (!flag) {
          allWindows.classList.add('widthresizeSmaller');
          allWindows.classList.remove('windowresizeBigger')
          flag = true;
        } else {
          flag = false;
          allWindows.classList.remove('widthresizeSmaller')
          allWindows.classList.add('windowresizeBigger')
        }
      })
    })
  })
}

resized()



const errorSound = new Audio();
errorSound.src = 'assets/sounds/error.mp3'
let soundPlayed = false;

const errorWindow = document.getElementById('error')

document.getElementById('explorerInput').addEventListener('keydown', ({ keyCode }) => {
  switch (keyCode) {
    case 13:
      if (!soundPlayed){
        errorSound.play();
        soundPlayed = true;
      }
      errorWindow.classList.add('displayFlex')
      document.getElementById('errorOk').addEventListener('click', () => {
       restartError();
      })
      
      break;

    default:
      break;
  }
})


function restartError() {
  startScreen.classList.remove('displayNone')
  explorerMain.style.display = 'none';
  errorWindow.classList.remove('displayFlex')
  soundPlayed = false;
  setTimeout(() => {
    startScreen.classList.add('displayNone')
    termianl.classList.add('displayBlock')

    setTimeout(() => {
      termianl.classList.remove('displayBlock')
      desktop.classList.add('displayFlex')
    }, 5000);
  }, 5000);
}