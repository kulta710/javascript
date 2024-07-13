const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    showItemInFolder: (path) => {ipcRenderer.send('show-item-in-folder', path)},
    openPath: (path) => {ipcRenderer.send('open-path', path)},
    openExternal: (url) => {ipcRenderer.send('open-external', url)}
})