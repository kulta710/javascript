console.log('main process working')

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
const fs = require('fs')
const ipcMain = electron.ipcMain

let win

function readFile (event, fileName) {
    let pathName = path.join(__dirname, 'files', fileName)
    
    // To read the file in text, we need to input 'utf8' option in fs.readFile() method.
    fs.readFile(pathName, 'utf8', function (error, content) {
        if (error) {
            return console.log(error)
        }

        win.webContents.send('read-file-reply', content)

        console.log("The file was read!")
    })
}

function writeFile (event, fileName, contents) {
    let pathName = path.join(__dirname, 'files', fileName)

    fs.writeFile(pathName, contents, function (error) {
        if (error) {
            return console.log(error)
        }

        console.log("The file was created!")
    })
}

function unlink (event, fileName) {
    let pathName = path.join(__dirname, 'files', fileName)
    
    fs.unlink(pathName, function (error) {
        if (error) {
            return console.log(error)
        }

        win.webContents.send('unlink-reply', 'deleted')

        console.log("The file was deleted!")
    })
}

function createWindow () {
    win = new BrowserWindow({
        show: false,
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

    win.once('ready-to-show', () => {
        win.show()
    })
    
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', () => {
    ipcMain.on('write-file', writeFile)
    ipcMain.on('read-file', readFile)
    ipcMain.on('unlink', unlink)
    
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