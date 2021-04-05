var xlsx = require("xlsx");
const fs= require("fs");
var wb= xlsx.readFile("example.xlsx");
let wbs = wb.SheetNames;
// console.log(wb.SheetNames);
var ws=wb.Sheets["Fori Gen"];
// console.log(ws);
// let ws;
let sheetData = xlsx.utils.sheet_to_json(ws);
var newWb = xlsx.utils.book_new;
var newWs =xlsx.utils.json_to_sheet(sheetData);
xlsx.utils.book_append_sheet(newWb,newWs,"NewDatta");
xlsx.writeFile(newWb, "NewExcel.xlsx");


// console.log(sheetData);
// wbs.forEach(wbk => {
//     let xlData = wb.Sheets[wbk];
//     dataArray.push(xlData);
// });
// console.log(wbs);

// wbs.forEach((wwb)=>{
//     console.log(wwb);
// });
fs.writeFile("data.txt", sheetData, (err)=>{
    if(err){
        console.log(err);
    } else{
        console.log("Data file json created");
    }
} );
// const fs= require("fs");

// //create a file

// fs.writeFile("example.txt", "this is an example", (err)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log("File succesfully Save");
//         fs.readFile("example.xlsx","utf8", (err, file)=>{
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         })
//     }
// });


// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let num1 = Math.floor(Math.random()*10)+1;
// let num2 = Math.floor(Math.random()*10)+1;
// console.log(`num1 is ${num1}`);
// console.log(`${num2} is the number2`);

// let answer = num1+num2;

// rl.question(`What is ${num1} + ${num2}?`,
// (usaerInput) =>{
//     console.log(userInput);
// });