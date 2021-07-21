const jwt = require('jsonwebtoken');
const CONFIG = require('../config/index');
const config = new CONFIG();

let verificarToken = (req, res, next) => {
    let token = req.get('Autorization');
    jwt.verify(token, config.configToken().seed,(err, decoded) => {
        if(err){
            return res.status(401).json({
                err
            })
        }
        req.usuario = decoded.usuario;
        next()
    });
}

module.exports = verificarToken;