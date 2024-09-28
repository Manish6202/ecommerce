const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors'); 


//create a database connection -> u can also 
//create a separate file for this and then import/use that file.

mongoose.connect("mongodb+srv://manish6202:manish620287@cluster0.fgmrx.mongodb.net/"
).then(()=>console.log('mongoDB connected ')) 
.catch((error)=> console.log(error));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin : 'http://localhost:5173',
        method : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credential : true
    })
);
app.use(cookieParser());
app.use(express.json());

app.listen(PORT, ()=> console.log(`server is no running on port ${PORT}`))
