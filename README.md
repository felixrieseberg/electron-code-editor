## A Tiny Electron Code Editor

<img align="right" src="https://cloud.githubusercontent.com/assets/1426799/20433647/7721d728-ad59-11e6-8221-fe94945b88d7.png">

This is a tiny code editor, based on Electron, written in about a 100 lines of code. It's meant to be a small example project with a short commit history to illustrate how Electron apps are built.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/felixrieseberg/electron-code-editor
# Go into the repository
cd electron-code-editor
# Install dependencies
npm install
# Run the app
npm start
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

#### License [MIT]
