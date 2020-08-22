const express = require("express")

const app = express();
const port = process.env.PORT;


app.get("/nodemon", (req, res)=> {
    res.send("Hello from Nodemon!");
})


app.listen(port, ()=> console.log(`Example app is listening on port ${port}`))