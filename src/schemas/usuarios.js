import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    'foto':{
        type: String,
        required: true
    },
    'nombre': {
        type: String,
        required: true
    },
    'correo': {
        type: String,
        required: true
    },
    'contrasena': {
        type: String,
        required: true
    },
    'activo': {
        type: Boolean,
        required: true
    }
},{'collection': 'usuarios', timestamps: true});

UsuarioSchema.pre('save', function(next){
    var usuario = this;
    if(!usuario.isModified('contrasena')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err,salt){
       if(err){
           console.log(err)
       }


        bcrypt.hash(usuario.contrasena, salt, function(err, hash){
            if (err){
                console.log(err)
            }

            usuario.contrasena = hash;
            next();
        })
    })
});

UsuarioSchema.methods.comparePassword = function(candidatePassword, cb){ //por si lo requerimos
    bcrypt.compare(candidatePassword, this.contrasena, function(err, isMatch){
        if(err) return cb(err);
        cb(null,isMatch);
    });
};


export default mongoose.model('usuarios', UsuarioSchema)