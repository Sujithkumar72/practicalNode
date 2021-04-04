var fs= require("fs");
var data = fs.readFileSync(__dirname+ "/excelData.xlsx", "utf8");
console.log(data);
var data2 = fs.readFile(__dirname+"/excelData.xlsx", "utf8", function(err, data){
    console.log(data);
});