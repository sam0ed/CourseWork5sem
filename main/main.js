const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const { setupCrosswordCommunication } = require('./crosswordConfig.js');
// if (require('electron-squirrel-startup')) app.quit();

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'CrossGen',
        width: 1000,
        height: 600,
        icon: path.join(__dirname, '../renderer/src/icons/Logo/logo.png'),
        webPreferences: {
            // webSecurity: false,
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, './preload.js')
        },
    });

    // const startUrl = url.format({
    //     pathname: path.join(__dirname, '../renderer/build/index.html'),
    //     protocol: 'file:',
    // })

    // mainWindow.loadURL(startUrl);
    mainWindow.loadURL('http://localhost:3000');

    //comment next line to enable dev tools
    mainWindow.setMenu(null);
    setupCrosswordCommunication();
    mainWindow.on('close', (event) => {
        mainWindow.webContents.send('mainWindow:close');
    })
}

app.on('ready', createMainWindow);

