require("dotenv").config()
const jwt = require("jsonwebtoken")

async function autenticar(req,res,next){
    try{
        const auth = req.headers.authorization
        if(!auth){
            throw new Error("Nao tem token!")
        }
        const [,token] = auth.split(" ")

        jwt.verify(token,process.env.JWT_KEY, (erro,decoded) => {
            if(erro){
                throw new Error("Token invalido " + erro.message)
            }else{
                req.id = decoded.id
                next();
            } 
        })
    }catch(e){
        res.json({erro: e.message})
    }
}

module.exports = autenticar