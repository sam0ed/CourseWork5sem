const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const { setupCrosswordCommunication } = require('./config/ipcController.js');
// if (require('electron-squirrel-startup')) app.quit();

/**
 * Creates and configures the main application window
 * @returns {BrowserWindow} - The created window instance
 */
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

    // Load the application UI
    // For production:
    // const startUrl = url.format({
    //     pathname: path.join(__dirname, '../renderer/build/index.html'),
    //     protocol: 'file:',
    // })
    // mainWindow.loadURL(startUrl);
    
    // For development:
    mainWindow.loadURL('http://localhost:3000');

    // Hide menu in production
    mainWindow.setMenu(null);
    
    // Setup communication channels
    setupCrosswordCommunication();
    
    // Handle window close
    mainWindow.on('close', (event) => {
        mainWindow.webContents.send('mainWindow:close');
    });
    
    return mainWindow;
}

// Create window when app is ready
app.on('ready', createMainWindow);

// Handle app activation (macOS)
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

