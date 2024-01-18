// This file contains the learning where CRUD 
// operations were performed in the file system locally

// // const app = require('./app.js')
// // console.log(app)

// const http = require('http');
// const data = require('./main_data')

// // const DataControl = (req,res) =>
// // {
// //     res.write('<h1>Proceed with the next and update the server </h1>');
// //     res.end();
// // }
// const DataControl = (req,res) =>
// {
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(data['name']))
//     res.end();
// }

// http.createServer(DataControl).listen(3001);


const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'crud')
const filePath = `${dirPath}/new.txt`

// fs.writeFileSync(filePath,"Hi this is a new file")

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath,' and the name of the file is new_file.txt',(err)=>{
//     if (!err) console.log('The has now been updated')
// })

fs.rename(filePath,`${dirPath}/new_file.txt`,(err)=>{
    if (!err) console.log('The file name is updated')
})