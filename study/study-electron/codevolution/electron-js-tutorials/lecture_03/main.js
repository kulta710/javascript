console.log('main process working')
console.log('main.js')

const electron = require('electron')
const app = electron.app
const ipcMain = electron.ipcMain
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

let winOne
let winTwo

function createWindowThree () {
    let winThree = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    winThree.loadURL(url.format({
        pathname: path.join(__dirname, 'three.html'),
        protocol: 'file',
        slashes: true
    }))

    winThree.webContents.openDevTools()
}

function createWindow () {
    winOne = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    winTwo = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    winOne.loadURL(url.format({
        pathname: path.join(__dirname, 'one.html'),
        protocol: 'file',
        slashes: true
    }))

    winTwo.loadURL(url.format({
        pathname: path.join(__dirname, 'two.html'),
        protocol: 'file',
        slashes: true
    }))

    winOne.webContents.openDevTools()
    winTwo.webContents.openDevTools()

    winOne.on('closed', () => {
        winOne = null
    })

    winTwo.on('closed', () => {
        winTwo = null
    })
}

app.on('ready', () => {
    ipcMain.handle('open-new-window', createWindowThree)
    
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