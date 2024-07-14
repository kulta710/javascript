console.log('main process working')

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
const ipcMain = electron.ipcMain
const dialog = electron.dialog

let win

function sendSync (event) {
    // Event.returnValue property
    /*
    Deprecated: This feature is no longer recommended.
    Thoug some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes.
    Avoid using it, and update existing code if possible;
    see the compatibility table at the bottom of this page to guide your decision.
    Be aware that this feature may cease to work at any time.
    */
    event.returnValue = 'sync-reply'
}

function openErrorDialog (event) {
    //dialog.showErrorBox('An error message', 'Demo of an error message')
    
    //event.sender.send('opened-error-dialog', 'Main process opened the error dialog')
    win.webContents.send('async-reply', 'Main process opened the error dialog')
}

function createWindow() {
    win = new BrowserWindow({
        height: 800,
        widht: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    win.webContents.openDevTools()
    
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', () => {
    ipcMain.handle('async-message', openErrorDialog)
    ipcMain.on('sync-message', sendSync)
    
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})