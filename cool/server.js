
//Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests
// that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.
const express=require("express");
const app=express();
const path=require("path");
const fs=require("fs");

app.use(express.static(path.join(__dirname,'public')));

// app.get('/',(req,res)=>{
//     console.log("i am in this url");
//     res.send("cooooooooooooool")
// });
app.get('/',function(req,res){
    //console.log("i am in this url");
    res.sendFile(path.join(__dirname+"index.html"))
});
 app.get('/hello',(req,res)=>{
     console.log("i am in this url");
      res.send("This is my kshay");
 });


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
  
    console.log("Example app listening at http://localhost:8081", host, port)
  })