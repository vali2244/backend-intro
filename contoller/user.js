const User = require('../model/user')


//200
//300 - large data
// 400 unauth
//500 internal server error

exports.create_user=async(req,res)=>{

    try {

        const {name,email,password,number,age} = req.body
const new_data = await User.create({name,email,password,number,age})
res.status(200).json({
    success:true,
    new_data
})


        
    } catch (error) {
        res.status(500).json({success:false, error})
    }


}


exports.get_users=async(req,res)=>{
    try {
        const all_users = await User.find();
        res.status(200).json({success:true, all_users})
    } catch (error) {
        res.status(500).json({success:false, error})
    }
}