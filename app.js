const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");
const bodyParser = require("body-parser");
var xlsx = require("xlsx");
const multer = require('multer');
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({urlextended: true}));
app.use(express.static("public"));

const fs = require('fs');


// try {
//   fs.unlinkSync(xlpath)
//   //file removed
// } catch(err) {
//   console.error(err)
// }

//set storage engine Multer
const storage = multer.diskStorage({
    destination:"./public/uploads/",
    filename: function(req, file, cb){
        cb(null, file.fieldname+path.extname(file.originalname));
    }
});

const upload = multer({
    storage : storage,
    fileFilter: function(req, file, cb){
        checkFileType(file,cb);
    }
}).single("file");

function checkFileType(file,cb){
    // const fileTypes = /xls|xlsx/;
    const fileExtfind = path.extname(file.originalname).toLowerCase();
    if(fileExtfind === ".xls" || fileExtfind ===".xlsx"){
        return cb(null, true);
    } else {
        cb("Error: Excel Files Only");
    }
}

app.listen(3000, function () {
    console.log("Server started at 3000");
});

app.get("/", function(req, res){

    res.render("home");
});



app.post("/upload", function(req, res){
    upload(req, res, function(err){
        if(err){
            res.render("home", {msg:err});
        } else {
            if(req.file == undefined){
                res.render("home", {
                    msg: "Error: No file selected"
                });
            } else {
                res.render("home", {
                    msg: "File Uploaded",
                    file: `uploads/${req.file.filename}`,
                    hidden: ""
                   
                });
            }
        }
    });


    
});

app.get("/process", function(req,res){
    var wb= xlsx.readFile(path.join(__dirname +"/public/uploads/file.xlsx"));
    // console.log(path.join(__dirname +"/public/uploads/file.xlsx"));
    console.log(wb.SheetNames);
})