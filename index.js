const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

require("./db/conn");


const app = express(); 
const port = 8000;
app.use(express.json());
app.use(cors());

app.use(require('./router/router'));


if( process.env.NODE_ENV == "production" ) {
    app.use(express.static("client/build"));
}


app.listen(process.env.PORT || port, () => {
    console.log(`port listening at ${port}`);
})