const response = require('../helper/response')
const model = require('../model/index');
const user = model.User;

const addUser = async(req, res)=>{
    try {
        const info = {
            first_name : req.body.first_name, 
            last_name : req.body.last_name, 
            email : req.body.email, 
            phone_num : req.body.phone_num
        }
        await user.create(info)
        res.status(200).send(response(true, "User signup successfully", info))
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {addUser};