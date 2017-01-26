const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${__dirname}/index.html`)
}

function setupFileDrop() {
  mainWindow.webContents.on('will-navigate', (e, url) => {
    e.preventDefault()
    mainWindow.webContents.send('open-file', url)
  })
}

app.on('ready', () => {
  createWindow()
  setupFileDrop()
})
