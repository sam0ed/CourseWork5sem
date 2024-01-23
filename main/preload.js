const { contextBridge, ipcRenderer } = require('electron')
const fs = require('fs')
const path = require('path')

// reading of the file needs to be async.
contextBridge.exposeInMainWorld('creator', {
    markdown: () => fs.readFileSync(path.join(__dirname, './Creator.html'), 'utf8')
})

contextBridge.exposeInMainWorld('ipcRenderer',
    {
        send: (channel, ...data) => {
            ipcRenderer.send(channel, ...data);
        },
        on: (channel, func) => {
            ipcRenderer.on(channel, (event,...args) => func(...args));
        }
    }
);
