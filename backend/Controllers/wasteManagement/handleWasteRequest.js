const waste  = require('../../SchemaModels/wasteRequests')

module.exports.handleWasteRequests = async ( data ) => {
    let responseData = {
        status:Number,
        message:''
    }
    const newWaste = new waste({
        userId: data.userId,
    
        wasteTypes: data.wasteTypes,
    
        image: data.image,
    
        location:
        {
            type: data.locationType,
            coordinates: data.coordinates
        }
    })
    try{
        const response = await newWaste.save();
        response.then( (data) => {
            console.log("The Waste request have been successfully stored.");
            console.log(data);
            responseData.status = 200;
            responseData.messag = "The Waste request have been successfully stored.";
        }).catch((error)=>{
            console.log("Error storing waste requets");
            console.log(error);
        })
    }
    catch(e){
        console.log(e)
    }
   
}
