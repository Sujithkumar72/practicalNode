var xlsx = require("xlsx");
const express =  require("express");
const ejs = require("ejs");
const Blob = require("cross-blob")
const fs= require("fs");
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
// const saveAs = require("./filesaver");

const app=express();
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));


app.listen("3000", ()=>{console.log("server started at 3000");});
app.get("/", (req,res)=>{
    res.render("./excel");
    excelConvert();
});

function excelConvert(){
    var wb= xlsx.readFile("example.xlsx");
    console.log(wb.SheetNames);
    var ws= wb.Sheets["Sheet1"];
    console.log(ws);
    let sheetData = xlsx.utils.sheet_to_json(ws);
    console.log(sheetData);

    var workSheet =xlsx.utils.json_to_sheet(sheetData);
    console.log(workSheet);
    var workBook = {
        Sheets:{
            "Enggdata":workSheet
        },
        SheetNames:["Enggdata"]
    }
    const excelBuffer =xlsx.write(workBook, {bookType:"xlsx", type:"array"});
    console.log(excelBuffer);
    saveAsExcel(excelBuffer, "myFile");
}
//     new Blob([]);
// globalThis.Blob = Blob;
function saveAsExcel(buffer, filename){
    const data = new Blob([buffer],{type:EXCEL_TYPE});
    saveAs(data, filename+"_dwd_"+ new Date().getTime()+EXCEL_EXTENSION);
}