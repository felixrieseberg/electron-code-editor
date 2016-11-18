const {ipcRenderer} = require('electron')
const fs = require('fs')

class FileManager {
  constructor({editor}) {
    this.editor = editor

    // When we receive a 'open-file' message, open the file
    ipcRenderer.on('open-file', (e, url) => this.openFile(url))
    ipcRenderer.on('save-file', (e) => this.saveFile())
  }

  openFile(url) {
    // fs.readFile doesn't know what `file://` means
    url = (url.slice(0, 7) === 'file://') ? url.slice(7) : url

    fs.readFile(url, 'utf-8', (err, data) => {
      this.editor.setModel(monaco.editor.createModel(data, 'javascript'))
      this.lastUrl = url
    })
  }

  saveFile() {
    if (this.lastUrl) {
      let data = ''
      let model = this.editor.getModel()

      model._lines.forEach((line) => {
        console.log(line)
        data += line.text + model._EOL
      })

      fs.writeFile(this.lastUrl, data, 'utf-8')
    }
  }
}

module.exports = FileManager