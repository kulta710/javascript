const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
    saveFile: (arrBuf) => ipcRenderer.send('save-file', arrBuf)
})