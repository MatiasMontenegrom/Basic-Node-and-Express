let express = require('express');
let app = express();
require('dotenv').config()
console.log("Hello World")

app.use(function middleware(req, res, next) {
  // Do something
  // Call the next function in line:
  next();
});


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

//aa






















 module.exports = app;
