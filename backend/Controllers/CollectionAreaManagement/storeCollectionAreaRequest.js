const collectionarea  = require('../../SchemaModels/collectionAreaRequestSchema')

module.exports.storeCollectionAreaRequest = async ( data ) => {

    let responseData = {
        status:Number,
        message:String
    }
    console.log("hello");
    console.log(data);
    const { location } = data;
    console.log("hello");
    console.log(location);
    const { type , coordinates } = JSON.parse(location);
    const newcollectionarea = new collectionarea({
        userId:     data.userId,

        email:      data.email,
        
        date:       data.date,

        desc:       data.desc,

        status:     data.status,
        
        wasteTypes: data.wasteTypes,
    
        location:{
            type : type,
            coordinates : coordinates
        }
    })
    await newcollectionarea.save().then( ()=> {
        responseData.message="Collection Area Request has been stored successfully",
        responseData.status=200
    }).catch( (error) => {
        responseData.message=`Error storing collection area request because ${error}`,
        responseData.status=404
    })
    return responseData;           
}
