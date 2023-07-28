const app=require("./app")
const {connect_db} =require('./config/database')
const port= 2233

connect_db();



app.listen(port,()=>console.log(`server is running at ${port} `))