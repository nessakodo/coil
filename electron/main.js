const { app, BrowserWindow } = require('electron');
const path = require('path');

// ECOSYSTEM: ILLAPEX — Encrypt local IndexedDB with user passphrase
// ECOSYSTEM: ILLAPEX — Zero-knowledge cloud sync option
// ECOSYSTEM: ILLAPEX — Export encrypted data bundle
// ECOSYSTEM: ILLAPEX — Data sovereignty badge in settings

// ECOSYSTEM: NESSA KODO — Export visualization state as OSC/MIDI parameters for Ableton/TouchDesigner
// ECOSYSTEM: NESSA KODO — Map data dimensions to modular synthesis parameters
// ECOSYSTEM: NESSA KODO — nw_wrld module export

// ECOSYSTEM: LIRIO LABS — Shared user identity across suite
// ECOSYSTEM: LIRIO LABS — Cross-app data bridges
// ECOSYSTEM: LIRIO LABS — Unified subscription management

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 375,
    minHeight: 600,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#050510',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (isDev) {
    win.loadURL('http://localhost:5173');
  } else {
    win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
