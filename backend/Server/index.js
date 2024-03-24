require('dotenv').config();
const connectDb = require('./dbConnection.js');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
connectDb();

/*const name = "Noyal";
app.get("/",(req,res)=>{
    console.log("Received a request.");
    res.send({name});
})*/

app.listen(process.env.PORT , () => {
    console.log("Listening ")
});
