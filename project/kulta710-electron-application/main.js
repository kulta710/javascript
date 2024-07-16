const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require('fs')
const path = require('node:path')

async function saveFile (event, arrBuf) {
    console.log(event)
    console.log(arrBuf)
    
    const buffer = Buffer.from(arrBuf)

    const filePath = path.join('D:\\', 'video', 'video.webm');

    fs.writeFile(filePath, buffer, () => {
        console.log('File saved successsfully')
    })
}

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        show: false,
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, 'index.html'))

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })

    // Open the DevTools
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    ipcMain.on('save-file', saveFile)
    
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})