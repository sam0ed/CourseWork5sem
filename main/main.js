const { app, BrowserWindow } = require('electron');
const path = require('path')
const url = require('url');
// if (require('electron-squirrel-startup')) app.quit();

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Electron',
        width: 1000,
        height: 600,
        webPreferences: {
            // webSecurity: false,
            nodeIntegration: true,
            contextIsolation: true,
            // preload: path.join(__dirname, 'preload.js')
        },
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, '../renderer/build/index.html'),
        protocol: 'file:',
    })

    mainWindow.loadURL(startUrl);
    // mainWindow.loadURL('http://localhost:3000');
}

app.on('ready', createMainWindow);
