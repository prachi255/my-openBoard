const express=require('express');//access
const socket=require('socket.io');
const app=express();//initialization and server ready
app.use(express.static("public"));

let port=4000;
let server=app.listen(port,()=>{
    console.log("listening to port "+ port);
})

let io=socket(server);
io.on("connection",(socket)=>{
console.log("made socket connection");

//recieved data
socket.on("beginPath",(data)=>{
    //now transfer data to all connected 
    //data=>from frontend
    io.sockets.emit("beginPath",data);
})

socket.on("drawStroke",(data)=>{

    io.sockets.emit("drawStroke",data);
})

socket.on("redoUndo",(data)=>{

    io.sockets.emit("redoUndo",data);
})

})