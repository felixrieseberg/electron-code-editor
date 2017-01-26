const loader = require('monaco-loader')
const FileManager = require('./filemanager')
const {remote} = require('electron')

loader().then(monaco => {
  let editor = monaco.editor.create(document.getElementById('container'), {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  })

  let fileManager = new FileManager({editor})

  remote.getCurrentWindow().show()
})
