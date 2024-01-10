const express = require("express");
const router = express.Router();
const {AdminModel} = require("../database/database.js");
const {adminInputMiddleware} = require("../middleware/admin.js")
const bcrypt = require("bcrypt");


router.post("/signUp", adminInputMiddleware ,async (req,res)=> {  
    const {name,username,password} = req.body;

    try{
      
        const admin = await AdminModel.findOne({username})
        if(admin){
            res.status(400).json({"message": "user already exist"})
        }
        
        const salt = await bcrypt.genSalt(Number(10))
        const hashedPassword = await bcrypt.hash(password, salt)

        await AdminModel.create({
            name,
            username,
            password:hashedPassword,
            role:"user"
        }) 

    res.status(200).json({"message":"your account created successfully !"})

    }catch(e){
        res.status(500).json({"message":e.message}) 
    }

})

module.exports = router;

