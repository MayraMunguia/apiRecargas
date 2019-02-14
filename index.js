import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';


const JsonParser = bodyParser.json();
const app = express();
const PORT = process.env.PORT || 6430

mongoose.connect("mongodb://admin:admin123@ds135255.mlab.com:35255/recargasdb");

const db = mongoose.connection;

app.get('/hola', (req,res) => {
    res.send("Hello hola");
});