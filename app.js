const express=require('express')
const cors  = require('cors')
const  app=express();
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser())




const user = require('./routes/user')
app.use('/api/v1',user)






module.exports=app