const {app,BrowserWindow,globalShortcut,dialog,Tray,Menu,ipcMain}=require('electron')
function createWindows() {
    const window=new BrowserWindow({
        width:1200,
        height:600,
        title:"Hang Man Game",
        // frame:false,
        // alwaysOnTop:true,
        // fullscreen:true,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false,
            enableRemoteModule:true
        },
        autoHideMenuBar:true,
        resizable:false,
        icon:__dirname +'./static/Hangman-icon.png'
       
        
    });
    // Menu.setApplicationMenu(menu)
    // const child=new BrowserWindow({parent:window})
    // window.webContents.openDevTools()
    window.maximize();
    window.loadFile("./Game_files/begin.html")
   
   
}
app.on('ready',()=>{
    console.log("SuccessFully App Started");
    createWindows();
})