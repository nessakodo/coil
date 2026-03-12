const { contextBridge, ipcRenderer } = require('electron');

// ECOSYSTEM: ILLAPEX — Expose encrypted storage APIs via context bridge
// ECOSYSTEM: NESSA KODO — Expose OSC/MIDI bridge for modular synthesis export

contextBridge.exposeInMainWorld('coilBridge', {
  platform: process.platform,
  isElectron: true,
  // Future: encrypt, decrypt, exportData, importData
});
