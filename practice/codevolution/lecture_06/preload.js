const electron= require('electron')
const ipcRenderer = electron.ipcRenderer
const contextBridge = electron.contextBridge

contextBridge.exposeInMainWorld('electronAPI', {
    asyncMessage: () => {ipcRenderer.invoke('async-message')},
    asyncReply: (value) => {ipcRenderer.on('async-reply', (_event, value) => {console.log(value)})},
    syncMessage: () => {ipcRenderer.sendSync('sync-message')}
})