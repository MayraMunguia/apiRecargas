import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TipoTarjetaSchema = new Schema({
    'nombre':{
        type: String,
        required: true
    }
},{'collection': 'tipostarjeta'});

export default mongoose.model('tipotarjeta', TipoTarjetaSchema);