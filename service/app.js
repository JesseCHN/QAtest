var express = require("express");
var app = express();

app.get('/test',function(req,res){
    res.send({data:"hello world"})
});

var server = app.listen(10000,function(){
    console.log("运行成功");
})

module.exports = server;
