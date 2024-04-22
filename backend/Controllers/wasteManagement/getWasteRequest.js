const waste  = require('../../SchemaModels/wasteRequests')

module.exports.getWasteRequest = async ( data ) => {

    let responseData = {
        status:Number,
        message:String,
        wasteData:[Object]
      }    
    
    await waste.find( { userId:data } ).sort({date:-1}).then( ( data )=> {
            console.log(data);
            responseData.message="Successfully fetched your orders",
            responseData.status=200,
            responseData.wasteData = data
        }).catch( (error) => {
            console.log(error)
            console.log("Internet Down");
            responseData.message=`Error fetching your orders because ${error}`,
            responseData.status=404,
            responseData.wasteData=[]

    })
    return responseData;       
}
