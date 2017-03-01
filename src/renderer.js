import loader from 'monaco-loader';
import { remote } from 'electron';
import FileManager from './filemanager';

loader().then((monaco) => {
  const editor = monaco.editor.create(document.getElementById('container'), {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
  });

  const fileManager = new FileManager({ editor, monaco });

  remote.getCurrentWindow().show();
});
