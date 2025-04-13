const { contextBridge, ipcRenderer } = require('electron')

// Expose IPC renderer methods to allow secure communication between processes
contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, ...data) => {
        ipcRenderer.send(channel, ...data);
    },
    on: (channel, func) => {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
})
