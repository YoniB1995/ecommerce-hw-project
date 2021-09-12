require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const connectDB = require('./db')
const PORT = process.env.PORT || 5000

const cors = require('cors');
const productRouter = require('./routes/productRouter');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


connectDB.on('error',()=>{
    console.log('error')
})


app.use('/products',productRouter)



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
