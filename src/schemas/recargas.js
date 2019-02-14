import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RecargaSchema = new Schema({
    'Cliente':{
        type: Schema.Types.ObjectId,
        ref: 'clientes'
    },
    'digitosTarjeta': {
        type: Number,
        required: true
    },
    'tipoTarjeta':{
        type: Schema.Types.ObjectId,
        ref: 'tarjetas'
    },
    'fechaVencimiento':{
        type: String,
        required: true
    },
    'nombreTitular':{
        type: String,
        required: true
    },
    'exito': {
        type: Boolean,
        required: true
    },
    'nombreCliente':{
        type: String,
        required: true
    },
    'correo':{
        type: String,
        required: true
    },
    'telefono':{
        type: String,
        required: true
    },
    'cantidadRecargda':{
        type: Number,
        required: true
    }
},{'collection': 'recargas', timestamps: true}); //no le puse fecha de creación cuz timestamps

export default mongoose.model('recargas', RecargaSchema)