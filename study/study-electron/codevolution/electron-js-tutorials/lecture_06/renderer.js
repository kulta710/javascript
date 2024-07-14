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

// In the past, if we use remote module, we can use main side methods in renderer.js like below. But it cannot now.
// const BrowserWindow = electron.remote.BrowserWindow
// let window = new BrowserWindow()
// window.loadURL('https://github.com/')