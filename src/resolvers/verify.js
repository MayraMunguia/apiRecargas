import Usuario from '../schemas/usuarios';
import jwt from 'jsonwebtoken';


/**
 * @returns {Object}- current user object
 * @param {string} token header
 */


const secret = 'Llave_SUPER_Secreta';
const tokenPrefix = 'JWT' // Prefix for HTTP header

export const verifyToken = (token) => {

    const [prefix, payload] = token.split(' ');

    let usuario = null
    if (!payload) { //no token in the header
        throw new Error('No token provided')
    }
    if (prefix !== tokenPrefix) { //unexpected prefix or format
        throw new Error('Invalid header format')
    }
    jwt.verify(payload, secret, (err, data) => {
        if (err) { //token is invalid
            throw new Error('Invalid token!')
        } else {

            console.log("EMAIL DEL PAYLOAD",data.correo);
            user = User.findOne({'email':data.correo});

        }
    })
    if (!usuario) { //user does not exist in DB
        throw new Error('User doesn not exisst')
    }
    return usuario
}