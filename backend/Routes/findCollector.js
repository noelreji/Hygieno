const express = require('express');
const router = express.Router();

const User  = require('../SchemaModels/userSchema')

router.post('/findCollectors',async (req,res) => {
    const data = req.body;
    console.log("find collectors");
    console.log(data);

    for( let i=1; i<=4; i++){
        console.log(i*5 + "radius");
        var nearC = await User.collector.find({location:{ $geoWithin: {$centerSphere : [ [data.lon,data.lat] , i*5/6378.1]} }});
        if(!nearC)
            continue;
        else
            break;
    }
    if(!nearC)
    {
        console.log("No nearby collectors");
        res.status(500).send('0');
    }
    else 
    {
        console.log(nearC)
        res.status(200).send(nearC);
    }
})
module.exports = router;