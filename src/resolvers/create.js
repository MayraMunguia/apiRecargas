import jwt from 'jsonwebtoken';
import usuarios from '../schemas/usuarios';
import bcrypt from 'bcrypt';

const expiresIn = '1d';  
const secret = 'Llave_SUPER_Secreta';


export const createToken = (correo,contrasena) => {
    //Si vienen vacias regresar false
    if(!correo || !contrasena){
        return false
    }

    const usuario = usuarios
    .findOne({'correo':correo})
    .then((usuario)=>{
        const compare = new Promise((resolve,reject)=>{
            bcrypt.compare(contrasena, usuario.contrasena, function(err,res){
                if(res && usuario.activo == false){
                    const payload = {
                        correo: usuario.correo,
                        id: usuario._id
                    }

                    const token = jwt.sign(payload, secret,{
                        expiresIn
                    })

                    resolve(token)
                }
                else{
                    reject(false)
                }
            })
        })
        return compare
    })
    .catch()
    return usuario
}