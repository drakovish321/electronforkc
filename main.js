const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: false }
  })

  // Load your website
  win.loadURL('https://kittenclicker.onrender.com')
}

app.whenReady().then(createWindow)
