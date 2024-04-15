const express = require('express');
const router = express.Router();
const { storeCollectionAreaRequest } = require('../Controllers/CollectionAreaManagement/storeCollectionAreaRequest');
const { getCollectionAreaRequest } = require('../Controllers/CollectionAreaManagement/getCollectionAreaRequest');
//const {getWasteRequest} = require('../Controllers/wasteManagement/getWasteRequest');


router.post('/collectionAreaRequests' ,async (req,res) => {
    try{
        console.log("Received Collection Area request");
        console.log("yep  "+req.body);
        const resp = await storeCollectionAreaRequest(req.body);
        console.log("fun");
        res.send(resp);
        console.log("joker");
    }
    catch(error){
        res.send(error.message);
        console.log("Error "+error.message);
    }   
})

router.get('/collectionAreaRequests' ,async (req , res) => {
    try{

        console.log("Received request to retrieve collection area data");
        const data = req.query.id;
        console.log(data);
        const resp = await getCollectionAreaRequest(data)
        res.send(resp);

    }
    catch(error){
        res.send(error.message);
        console.log("Error "+error.message);
    } 
})
/*
router.post('/collectionAreaRequests/delete' , async (req , res) => {
    try{

        console.log("Received request to delete waste data");
        const resp = await deleteWasteRequest(req.body)
        res.send(resp);
    }
    catch(error){
        res.send(error.message);
        console.log("Error "+error.message);
    } 
})
*/
module.exports = router;