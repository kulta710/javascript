const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 1500
    })

    win.loadURL('https://github.com')

    const contents = win.webContents
    console.log(contents)
}

app.whenReady().then(() => {
    createWindow()
})