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
const handleCollectionAreaRequest = require('../Routes/handleCollectionAreaRequests.js');

//routes
app.post('/login',authentication);
app.post('/signup',authentication);

app.post('/addWasteRequest',handleWaste);
app.get('/getWasteRequest',handleWaste);
app.post('/deleteWasteRequest',handleWaste);

app.post('/collectionAreaRequests',handleCollectionAreaRequest);
app.get('/collectionAreaRequests',handleCollectionAreaRequest);

app.listen(process.env.PORT , () => {
    console.log("Listening ")
});
