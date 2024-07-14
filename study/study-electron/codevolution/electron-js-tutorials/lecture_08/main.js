console.log('main process working')

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
const Menu = electron.Menu
const MenuItem = electron.MenuItem

let win

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
    createWindow()
    
    const template = [
        {
            label: 'Edit',
            submenu: [
                {
                    role: 'undo'
                },
                {
                    role: 'redo'
                },
                {
                    type: 'separator'
                },
                {
                    role: 'cut'
                },
                {
                    role: 'copy'
                },
                {
                    role: 'paste'
                },
                {
                    role: 'pasteandmatchstyle'
                },
                {
                    role: 'delete'
                },
                {
                    role: 'selectall'
                },
            ]
        },
        {
            label: 'demo',
            submenu: [
                {
                    label: 'submenu1',
                    click: function () {
                        console.log('Clicked submenu 1')
                    }
                },
                {
                    type: 'separator'
                },
                {
                    label: 'submenu2'
                }
            ]
        },
        {
            label: 'Help',
            click: function () {
                // Execute a tab window of the url in the browser
                electron.shell.openExternal('https://www.electronjs.org/')
            }
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    const ctxMenu = new Menu()
    ctxMenu.append(new MenuItem({
        label: 'Hello',
        click: function () {
            console.log('Context menu item clicked')
        }
    }))
    ctxMenu.append(new MenuItem({
        role: 'selectall'
    }))

    win.webContents.on('context-menu', function (event, params) {
        ctxMenu.popup(win, params.x, params.y)
    })
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