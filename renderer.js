// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const loader = require('./node_modules/monaco-editor/min/vs/loader.js')
const FileManager = require('./filemanager.js')

loader.require.config({
  baseUrl: encodeURI(`file://${__dirname}/node_modules/monaco-editor/min`)
})

// Help Monaco understand how there's both Node and Browser stuff
self.module = undefined
self.process.browser = true

loader.require(['vs/editor/editor.main'], () => {
  let editor = monaco.editor.create(document.getElementById('container'), {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  })

  let fileManager = new FileManager({editor})
})
