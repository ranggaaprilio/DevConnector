const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path =require('path');

//Connect DB
connectDB();

// init middleware Body Pharser
app.use(express.json({ extended: false }));

// root Route
// app.get("/", (req, res) => res.send("Server is Already Running"));

// define route
app.use("/api/users", require("./Routes/API/users"));
app.use("/api/auth", require("./Routes/API/auth"));
app.use("/api/posts", require("./Routes/API/post"));
app.use("/api/profile", require("./Routes/API/profile"));

//serve static asset on production

if(process.env.NODE_ENV==='production'){
  //set static folder
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
}

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST,() => {
  console.log(`App listening on port ${HOST}:${PORT} `);
});
