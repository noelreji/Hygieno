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
            newRequests_date: [],
            newRequests_disposernames:[],
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
                    console.log('41 disposer ',eachCA.newRequests_disposernames);
                    eachCA.nofNewRqFromD=k;
                    eachCA.newRequests_date.push(j.date);
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