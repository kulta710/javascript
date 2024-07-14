console.log('From Renderer 1')

const newWindowBtn = document.getElementById('newWindowBtn')
newWindowBtn.addEventListener('click', function (event) {
    window.electronAPI.openNewWindow()
})