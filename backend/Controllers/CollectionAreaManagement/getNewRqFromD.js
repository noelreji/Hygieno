const collectionarea  = require('../../SchemaModels/collectionAreaRequestSchema')

const waste  = require('../../SchemaModels/wasteRequests')

module.exports.getNewRqFromD = async ( data ) => {
    console.log('hej');
    let responseData = {
        status:Number,
        message:String,
        newRqFromD:[Object]
    }    
    const result1 = await waste
        .find(
        {collector:data}, 
        {status:'Pending Collection'});

    const result2 = await collectionarea
        .find( 
        { userId:data } );
    console.log('jike');
    console.log(result1);
    responseData.newRqFromD=result1;
    return responseData;       
}