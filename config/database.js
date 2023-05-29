const mongoose=require("mongoose")

exports.connectDatabse=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"socialmedia"  
    })
    .then((con)=> console.log(`Databse Connected: ${con.connection.host} `))
    .catch((err) => console.log(err))
}