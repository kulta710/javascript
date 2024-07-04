const asyncBtn = document.getElementById('asyncBtn')
const syncBtn = document.getElementById('syncBtn')

asyncBtn.addEventListener('click', function () {
    console.log('async message 1')
    window.electronAPI.asyncMessage()
    console.log('async message 2')
})

syncBtn.addEventListener('click', function () {
    console.log('sync message 1')
    // event.returnValue가 deprecated 되었기 때문에
    // undefined가 return 된다.
    const reply = window.electronAPI.syncMessage()
    console.log(reply)
    console.log('sync message 2')
})

window.electronAPI.asyncReply()

// 과거에는 remote module을 쓰면 아래와 같이 renderer.js에서도 쓸 수 있었다고 한다.
// 그러나 지금은 될 리가 없다. preload.js에서 실험해봐도 되지 않는다.
// const BrowserWindow = electron.remote.BrowserWindow
// let window = new BrowserWindow()
// window.loadURL('https://github.com/')