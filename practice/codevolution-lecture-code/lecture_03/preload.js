const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
    openNewWindow: () => ipcRenderer.invoke('open-new-window')
})