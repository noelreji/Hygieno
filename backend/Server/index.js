//configuration
require('dotenv').config();
const connectDb = require('./dbConnection.js');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


//essentials
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
connectDb();

//route functions
const authentication = require('../Routes/authentication.js');

//routes
app.post('/login',authentication);
app.post('/signup',authentication);
app.put('handleWasteRequests',)

app.listen(process.env.PORT , () => {
    console.log("Listening ")
});
