const defaultMenu = require('electron-default-menu')
const { Menu, app, shell, BrowserWindow, dialog } = require('electron')

module.exports = function setupMenu () {
  const menu = defaultMenu(app, shell)

  menu.splice(1, 0, {
    label: 'File',
    submenu: [
      {
        label: 'Open File',
        accelerator: 'CmdorCtrl+O',
        click: (item, focusedWindow) => {
          dialog.showOpenDialog({ properties: ['openFile'] }, (files) => {
            focusedWindow.webContents.send('open-file', files[0])
          })
        }
      },
      {
        label: 'Save File',
        accelerator: 'CmdorCtrl+S',
        click: (item, focusedWindow) => {
          focusedWindow.webContents.send('save-file')
        }
      }
    ]
  })

  Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
}