const waste  = require('../../SchemaModels/wasteRequests')

module.exports.storeWasteRequest = async ( data ) => {

    let responseData = {
        status:Number,
        message:String
      }

    const {location} = data;
    const { type , coordinates } = JSON.parse(location);
    const imageBuffer = Buffer.from(data.waste_image, 'base64');
    
    const newWaste = new waste({
        userId: data.userId,
        
        date:data.date,

        status:data.status,

        desc:data.desc,
        
        wasteTypes: data.wasteTypes,
    
        image: imageBuffer,
    
        location:{
            type : type,
            coordinates : coordinates
        }
    })
            await newWaste.save().then( ()=> {
                responseData.message="Waste Request has been stored successfully",
                responseData.status=200
            }).catch( (error) => {
                responseData.message=`Error storing waste request because ${error}`,
                responseData.status=404
            })
            return responseData;           
}
