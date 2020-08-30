const express = require("express");
const cors = require("cors");
const path = require("path");
const enforce = require('express-sslify');
const compression = require('compression');
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(compression);


if(process.env.NODE_ENV === 'production'){
    app.use(compression);
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname,'client/build')));
    app.get('*', function(req,res){
        res.sendFile(path.join(__dirname,'client/build','index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, error=>{
    if(error) throw error;
    console.log(`Server running on port : ${port}`)
});


app.get('/service-worker.js', (req,res) => {
    res.sendFile(path.resolve(__dirname,'..','build','service-worker.js'));
})

app.post("/payment", (req,res) => {
    const body = {
        source:req.body.token.id,
        amount:req.body.amount,
        currency:'inr'
    };

    stripe.charges.create(body, (error,response)=>{
        if(error){
            res.status(500).send({error});
        }
        res.status(200).send({response});
    })
})
