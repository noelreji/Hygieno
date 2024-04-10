const express = require('express');
const multer = require('multer');
const router = express.Router();
const {handleWasteRequest} = require('../Controllers/wasteManagement/handleWasteRequest');

const upload = multer({ storage: multer.memoryStorage()});

router.post('/wasteRequests',upload.single('waste_image') ,async (req,res) => {
    try{
        console.log("Received Waste Store request");
        const resp = await handleWasteRequest(req.body)
        res.send(resp);
    }
    catch(error){
        res.send(error.message);
        console.log("Error "+error.message);
    }   
})

module.exports = router;