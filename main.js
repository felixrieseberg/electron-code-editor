const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function createWindow () {
  let mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadURL(`file://${__dirname}/index.html`)
}

app.on('ready', createWindow)
