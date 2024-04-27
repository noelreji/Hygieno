const collectionarea  = require('../../SchemaModels/collectionAreaRequestSchema')

const waste  = require('../../SchemaModels/wasteRequests')

module.exports.getNewRqFromD = async ( data ) => {
    console.log('hej');
    let responseData = {
        status:Number,
        message:String,
        newRqFromD:new Array()
    }
    
    const w = await waste
        .find(
        {collector:data, status:'Pending Collection'});
    console.log('w ',Object.keys(w).length);

    const ca = await collectionarea
        .find( 
        { userId:data } );
    console.log('ca ',Object.keys(ca).length);
   
    for (let i of ca){
        let eachCA = {
            id:i._id,
            area: i.area,
            newRequests_dates: [],
            newRequests_disposernames:[],
            newRequests_images:[],
            wasteTypes: i.wasteTypes,
            date: i.date
        };
        let k=0;
        console.log('loop 1');
        for(let j of w){
            if(JSON.stringify(i._id)===JSON.stringify(j.collectionArea)){
                console.log("fok");
                console.log(j);
                k++;
                try{
                    eachCA.newRequests_disposernames.push(j.disposername);
                    eachCA.newRequests_dates.push(j.date);
                    console.log('43 j.image:', j.image);
                    console.log('44 j.image.buffer:', j.image);
                    console.log('Type of j.image.buffer:', typeof j.image);
                    console.log('Type of j.image.buffer:', j.image);
                    
                        eachCA.newRequests_images.push(j.image);
                        //console.log('41 disposer', j.image.buffer.toString('base64'));
                
                        //console.log('Invalid image data or empty buffer');
                    eachCA.nofNewRqFromD=k;
                    
                }catch(e){
                    console.log(e);
                }
            }
            
            console.log('loop 2');
            
        }
        if(k!=0){
            responseData.newRqFromD.push(eachCA);
            console.log('54 disposer ',responseData.newRqFromD);
            console.log('34',responseData.newRqFromD[0].area);
        }
    
    }
    console.log('finished');
    return responseData;       
}