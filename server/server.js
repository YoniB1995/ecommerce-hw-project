require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const connectDB = require('./db')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const cors = require('cors');
const productRouter = require('./routes/productRouter');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


connectDB.on('error',()=>{
    console.log('error')
})


app.use('/products',productRouter)
app.post('/send_mail',cors(), async (req,res)=> {
    const {text,email,subject} = req.body;
    const transport = nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT ,
        auth: {
            user: process.env.SMPT_USERNAME,
            pass: process.env.SMPT_PASSWORD
        }
    })

    await transport.sendMail({
        from: process.env.SMPT_MAILFROM,
        to: email,
        subject : subject,
        html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
        ">
        <h2>Here is your email!</h2>
        <p>${text}</p>

        <p>All the best, eCommerce Shop</p>
        </div>
        `
    })
})


if (process.env.NODE_ENV === 'production'){ 
    app.use(express.static(path.join(__dirname,'../client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname, '../client/build','index.html'))
    });
} else {
    app.get('/', (req,res) =>{
        res.send("Api running")
    })
}

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))
