const {ipcRenderer} = require('electron')
const fs = require('fs')

class FileManager {
  constructor({editor}) {
    this.editor = editor

    console.log(editor)

    // When we receive a 'open-file' message, open the file
    ipcRenderer.on('open-file', (e, url) => this.openFile(url))
  }

  openFile(url) {
    // fs.readFile doesn't know what `file://` means
    url = (url.slice(0, 7) === 'file://') ? url.slice(7) : url

    fs.readFile(url, 'utf-8', (err, data) => {
      this.editor.setModel(monaco.editor.createModel(data, 'javascript'))
    })
  }
}

module.exports = FileManager