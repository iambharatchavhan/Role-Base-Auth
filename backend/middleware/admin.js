const zod = require("zod")


const verifyingInputs = zod.object({
    name : zod.string().min(2),
    username: zod.string().email(),
    password: zod.string().min(6)
})

const adminInputMiddleware = (req,res,next)=>{
    try {
    
        verifyingInputs.parse(req.body)
        next();
      

    } catch (error) {
      res.status(500).json({"ErrorMessage":error.message})
        
    }

}


module.exports = {adminInputMiddleware}