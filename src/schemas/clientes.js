import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    'foto':{
        type: String,
        required:false
    },
    'nombres': {
        type: String,
        required: true
    },
    'apellidoPaterno':{
        type: String,
        required: true
    },
    'apellidoMaterno':{
        type: String,
        required: true
    },
    'correo':{
        type: String,
        required: true
    },
    'telefono': {
        type: String,
        required: true
    },
    'cuentaLealtad':{
        type: String,
        required: true
    },
    'prepago':{
        type: Number,
        required: true
    },
    'monedero':{
        type: Number,
        required: true
    }
},{'collection': 'clientes', timestamps: true}); 

export default mongoose.model('clientes', ClienteSchema)