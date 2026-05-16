const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 650,
    height: 555,           // Increased slightly to accommodate the native title bar
    alwaysOnTop: true,     // Starts up floating by default
    frame: true,           // NATIVE WINDOW FRAME RESTORED (Enables standard OS close/minimize/drag)
    transparent: false,    // Set to false for standard native OS window backgrounds
    resizable: true,
    hasShadow: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  win.loadFile('index.html');

  // Dynamic IPC Bridge: Listens for the footer toggle checkbox from index.html
  ipcMain.on('set-always-on-top', (event, isAlwaysOnTop) => {
    win.setAlwaysOnTop(isAlwaysOnTop);
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});