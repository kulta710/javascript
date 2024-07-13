console.log('main process working')

const electron = require('electron')
const app = electron.app
//const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
const ipcMain = electron.ipcMain
const Tray = electron.Tray
const iconPath = path.join(__dirname, 'forest.png')
const Menu = electron.Menu

let tray = null

app.on('ready', function () {
    tray = new Tray(iconPath)

    let template = [
        {
            label: 'Audio',
            submenu: [
                {
                    label: 'Low',
                    type: 'radio',
                    checked: true
                },
                {
                    label: 'High',
                    type: 'radio'
                }
            ]
        },
        {
            label: 'Video',
            submenu: [
                {
                    label: '1280x720',
                    type: 'radio',
                    checked: true
                },
                {
                    label: '1920x1080',
                    type: 'radio'
                }
            ]
        }
    ]

    // We can control as right click the tray icon
    // We can see tool tip when we hover the tray icon
    const ctxMenu = Menu.buildFromTemplate(template)
    tray.setContextMenu(ctxMenu)
    tray.setToolTip('Tray Application')
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