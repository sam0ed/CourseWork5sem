const { contextBridge } = require('electron')
const fs = require('fs')
const path = require('path')

// reading of the file needs to be async.
contextBridge.exposeInMainWorld('creator', {
  markdown: ()=> fs.readFileSync( path.join(__dirname,'./Creator.html') , 'utf8')
})
