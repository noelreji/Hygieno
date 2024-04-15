//configuration
require('dotenv').config();
const connectDb = require('./dbConnection.js');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();


//essentials
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
connectDb();

//route functions
const authentication = require('../Routes/authentication.js');
const handleWaste = require('../Routes/handleWaste.js');
//routes
app.post('/login',authentication);
app.post('/signup',authentication);
app.post('/wasteRequestsp',handleWaste)
app.get('/wasteRequests',handleWaste)
app.post('/wasteRequests/delete',handleWaste)


app.listen(process.env.PORT , () => {
    console.log("Listening ")
});
