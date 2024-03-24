const mongo = require('mongoose');
const connectDb = async () => {
    try
    {
       const conObj = await mongo.connect(process.env.DB_URL)
       console.log(`Database Connected ${conObj.connection.host}`);
    }
    catch(e)
    {
        console.log("Database Connection Failed.");
        console.error(e);
    }
}
module.exports=connectDb;