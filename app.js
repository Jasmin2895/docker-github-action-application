const express = require("express")
const mysql = require('mysql');

const con = mysql.createConnection({

   host: "mysql",
    
    user: "root",
    
    password: "complexpassword",
    
    database: 'Customers'
    
    });
const app = express();
const port = process.env.PORT;


app.get("/nodemon", (req, res)=> {
    res.send("Hello from Nodemon!");
})


app.listen(port, ()=> console.log(`Example app is listening on port ${port}`))