const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8085;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.use("/api/v2/authen/", require("./api_authen"));
app.use("/api/v2/", require("./api_establishment"));

app.listen(PORT, ()=>{
    console.log("Backend is running..")
})