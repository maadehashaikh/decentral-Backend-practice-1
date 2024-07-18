// const fs = require('fs');

// Write
// fs.writeFile("message.txt","My name is maadeha",(err)=>{
//   if(err) throw err ;
//     console.log("File is created sucessfully");
// });

// Read

// fs.readFile("./message.txt", "Utf8" ,(err,data) => {   //decode
//   if(err) throw err ;
//   console.log(data);
// })

// Write

// fs.appendFile("./message.txt" ,"she love to write",(err,data) => {   // write pehly walay ko remove kardyta h 
//     if(err) throw err ;                                              // jab kay  append new add karta h content
//     console.log("File has been write sucessfully");
//   })


// Delete

// fs.unlink("message.txt",(err) => {
//   if(err) throw err ;
//   console.log("file has been deleted sucessfully");
// })


// ---------------------------------
// Using SillyName NPM 

// var generateName = require('sillyname');

// import generateName from "sillyname";
//  // import kay liyay we do type : module in package .json
// var sillyName = generateName();
// console.log(`The silly name is : ${sillyName}`);  

// more save is using type nodule not require



import inquirer from 'inquirer';
import { type } from 'os';
import qr from 'qr-image';
import fs from 'fs'


inquirer 
.prompt([{
  message:"Type your URL",
  name:"URL",
},
])
.then((answer) => {
  const url = answer.URL;
  var qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream("qr_img.png"));
})







