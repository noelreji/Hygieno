const express = require('express');

const router = express.Router();
const { getNewRqFromD } = require('../Controllers/CollectionAreaManagement/getNewRqFromD');
router.get('/getNewRqFromD' ,async (req , res) => {
    try{

        console.log("\n\n**************\n\nReceived request to retrieve new Request from disposer data");
        const data = req.query.id;
        console.log(data);
        const resp = await getNewRqFromD(data)
        res.send(resp);

    }
    catch(error){
        res.send(error.message);
        console.log("Error "+error.message);
    } 
});

module.exports = router;