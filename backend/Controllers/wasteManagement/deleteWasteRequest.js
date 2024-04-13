const waste  = require('../../SchemaModels/wasteRequests')

module.exports.deleteWasteRequest = async ( data ) => {

    let responseData = {
        status:Number,
        message:String,
        wasteData:[Object]
      }    
    
    await waste.deleteOne( { userId:data.userId , _id:data._id} ).then( ( data )=> {
            console.log(data);
            responseData.message="Successfully deleted your orders",
            responseData.status=200,
            responseData.wasteData = data
        }).catch( (error) => {
            responseData.message=`Error deleting your orders because ${error}`,
            responseData.status=404
    })
    return responseData;       
}
