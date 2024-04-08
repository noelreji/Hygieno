const User  = require('../../SchemaModels/userSchema')

module.exports.validateUser = async (userCredentials) => {
    console.log("hey");
    if(userCredentials.usertype === "Disposer")
      var user = await User.disposer.findOne({email:userCredentials.email} );
    else if(userCredentials.usertype === "Collector")
      var user = await User.collector.findOne({email:userCredentials.email} );
    else
      return "UserType is not defined."
    
    if(!user){
      console.log("Failed");
      return [{
        status:404,
        message:"User not found"
      }]
    }
    else{
      console.log("Success");
      if(user.password === userCredentials.password)
      {
        return [{
          status:200,
          message:"You have been autheticated.",
          usertype:userCredentials.usertype
      },user]
      }
      else
        return [{
          status:404,
          message:"Wrong Password",
          usertype:userCredentials.usertype
      },user]
    }
  }