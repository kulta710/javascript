const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    writeFile: (fileName, contents) => {ipcRenderer.send('write-file', fileName, contents)},
    readFile: (fileName) => {ipcRenderer.send('read-file', fileName)},
    readFileReply: (callback) => {ipcRenderer.on('read-file-reply', (_event, content) => {
        callback(content)
    })},
    unlink: (fileName) => {ipcRenderer.send('unlink', fileName)},
    unlinkReply: (callback) => {ipcRenderer.on('unlink-reply', (_event, reply) => {
        callback(reply)
    })}
})