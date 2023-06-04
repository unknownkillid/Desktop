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