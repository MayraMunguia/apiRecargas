import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';


app.get('/hola', (req,res) => {
    res.send("Hello hola");
});