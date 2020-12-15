let express = require("express");
let bodyparser = require("body-parser")
let cors = require('cors')
let app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors())
let productApi = require("./controllers/products.controller")
app.use("/products", productApi);

app.listen(8080, () =>{
    console.log("server run");
})