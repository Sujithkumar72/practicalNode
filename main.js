const xlsx= require("xlsx");
const path = require("path");
var wb= xlsx.readFile(path.join(__dirname +"/public/uploads/file.xlsx"));
console.log(path.join(__dirname +"/public/uploads/file.xlsx"));
console.log(wb.SheetNames);