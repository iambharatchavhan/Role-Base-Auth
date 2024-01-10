const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bharatchavhan141:KU0UJLjxi1pHc4SG@cluster0.neblvsg.mongodb.net/TheRoleBaseAuth")


 const AdminSchemas = new mongoose.Schema({
    name:String,
    username:String,
    password:String, 
    role:String
 })




const AdminModel  = mongoose.model("AdminModel", AdminSchemas)

 module.exports = {AdminModel}