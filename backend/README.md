# Role-Base Authentication
 
### initial dependencies installed
                 - nodemon
                 - body-parser
                 - mongoose
                 - express
                 - cors
                 - bcrypt
                 - jsonwebtoken
                 - dotenv

### initial app initialization index.js
 
 ```javascript

const express = require("express");
const port = 3000;
const app = express();

const cors = require("cors")
const bodyParser = require("body-parser")

// main middleware for every root

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


// main middleware for every root






app.listen(port,()=>{
    console.log(`Server is up on the post ${port}`)
})

 
 ```

 ## Connect to the database and create schemas

```javascript
const mongoose = require("mongoose");

mongoose.connect("DB-connection string")


 const AdminSchemas = new mongoose.Schema({
    name:String,
    username:String,
    password:String, 
 })




const AdminModel  = mongoose.model("AdminModel", AdminSchemas)

 module.exports = {AdminModel}

```

# Writing middlewares for validating this schemas and user inputs == used zod

```javascript

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

```

## creating Route for SignUp admin 
```javascript
const express = require("express");
const router = express.Router();
const {AdminModel} = require("../database/database.js");
const {adminInputMiddleware} = require("../middleware/admin.js")
const bcrypt = require("bcrypt");


router.post("/singUp", (req,res)=>{
    // logic
})


```