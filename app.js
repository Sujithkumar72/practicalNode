const express= require("express");
const ejs= require("ejs");
const _ = require("lodash");
const bodyParser = require("body-parser");
const upload = require("express-fileupload");
const xlsx= require("xlsx");


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({urlextended: true}));
app.use(express.static("public"));
app.use(upload());

app.listen(3000, function () {
    console.log("Server started at 3000");
});

app.get("/", function(req, res){
    res.render("home");
});

app.post("/", function(req, res){
    if(req.files){
        console.log(req.files);
        var excelFile =req.files.file;
        console.log(excelFile.name);
        // var wb=xlsx.readFile("excelFile");
        // console.log(wb.SheetNames);
        // var excelFile = file.name;
        // console.log(filename);
        // file.mv("/uploads", filename, function(err){
        //     if(err){
        //         console.log(err);
        //     } else{
        //         res.send("File Uploaded");
        //     }
        // });
        
    }
});

// app.get("/extract", function(req,res){
    
// })