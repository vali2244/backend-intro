const mongoose = require('mongoose')

exports.connect_db=async()=>{

    await mongoose.connect('mongodb://127.0.0.1:27017/test1')
    .then(res=>console.log(`mongo is connected at ${res.connection.host}`))
    .catch(err=>console.log(err))
}

