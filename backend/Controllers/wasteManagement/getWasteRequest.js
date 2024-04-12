const waste  = require('../../SchemaModels/wasteRequests')

module.exports.getWasteRequest = async ( data ) => {

    let responseData = {
        status:Number,
        message:String,
        wasteData:[Object]
      }    
    
    await waste.find( { userId:data } ).then( ( data )=> {
            console.log(data);
            responseData.message="Successfully fetched your orders",
            responseData.status=200,
            responseData.wasteData = data
        }).catch( (error) => {
            responseData.message=`Error fetching your orders because ${error}`,
            responseData.status=404
    })
    return responseData;       
}
