let express = require('express');
let app = express();
require('dotenv').config()
console.log("Hello World")

app.use( function middleware(req, res, next) {
	var something = req.method + " " + req.path + " - " + req.ip;
	console.log(something);
	next();
})


app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname +"/views/index.html")
  })

app.get('/json',(req,res)=>{
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "HELLO JSON"})
      } else {
        res.json({"message": "Hello json"})
      }
})

app.get("/now",(req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);

app.get('/:word/echo', (req, res) => {
  req.params.word
  res.json({echo: word})
})






















 module.exports = app;
