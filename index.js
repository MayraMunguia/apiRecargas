import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import usuario from './src/schemas/usuarios'


const JsonParser = bodyParser.json();
const app = express();
const PORT = process.env.PORT || 6430

mongoose.connect("mongodb://admin:admin123@ds135255.mlab.com:35255/recargasdb");

const db = mongoose.connection;

db.on('error',() => console.log('Failed to connect to mongoDB'))
    .once('open',()=> console.log('Connected to MongoDB', PORT));

app.get('/hola', (req,res) => {
    res.send("Hello hola");
});



app.use('/verifyToken', JsonParser, (req,res)=> {
    if(req.method === 'POST'){
        try{
            const token = req.headers['authorization']
            verifyToken(token)
            .then(usuario => {
                console.log(usuario)
                res.status(200).json({usuario});
                console.log(usuario)
            })
            .catch(err=>{
                console.log(err)
            })
        } catch(e){
            console.log(e.message);
            res.status(401).json({
                message:e.message
            })
        }
    }
})



