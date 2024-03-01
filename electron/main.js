
const { app, BrowserWindow, screen , ipcMain} = require('electron');
const path = require("path");
const fs = require("fs");
const {channels} = require('../src/preload/preload')

if (require('electron-squirrel-startup')) app.quit()

let win
const createWindow = () => {
   win = new BrowserWindow({
    width: screen.getPrimaryDisplay().workArea.width,
    height: screen.getPrimaryDisplay().workArea.height,
    // show: false,
    backgroundColor: "white",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
  }
  })
  // const startURL = isDev ? 'http://localhost:3000' : `file://$(path.join(__dirname,'build/index.html' )}`;
  win.loadURL('http://localhost:3000')

  win.once('ready-to-show', ()=> win.show())
  win.on('closed', () =>{
    win.null
  })
 
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  // ipcMain.on(channels.GET_DATA, (event, arg)=>{
  //   const {product} = arg
  //   console.log(product)
  // })
  ipcMain.on('toMain', (event, args)=>{
    fs.readFile("text from ipcMain", (error, data) =>{
      win.webContents.send("fromMain", responseObj)
    })
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
