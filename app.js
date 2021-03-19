const express = require('express')
const app = express()


app.use(express.static('public'));

//app.use(express.json()) // for parsing application/json
//app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });


app.get('/api/whoami',(req,res)=>{
    
headers = req.headers;

software = headers['user-agent']
language = headers['accept-language']



res.json({
    ipaddress: req.ip,
    language,
    software
})



})




app.listen(3000, ()=>{
    console.log("server is active")
})