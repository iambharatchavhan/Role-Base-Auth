const express = require("express");
const port = 3000;
const app = express();

const cors = require("cors")
const bodyParser = require("body-parser")
const signUp = require("./routes/admin.js")


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.use("/admin", signUp)





app.listen(port,()=>{
    console.log(`Server is up on the post ${port}`)
})
