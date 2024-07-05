const openBtn = document.getElementById('openBtn')

openBtn.addEventListener('click', function () {
    window.electronAPI.showItemInFolder('D:\\OneDrive\\project-archive\\screen-capture\\practice\\codevolution\\lecture_10\\test\\demo.txt')
    window.electronAPI.openPath('D:\\OneDrive\\project-archive\\screen-capture\\practice\\codevolution\\lecture_10\\test\\forest.png')
    window.electronAPI.openExternal('https://www.electronjs.org/')
})