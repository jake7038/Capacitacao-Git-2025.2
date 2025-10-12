const userService = require("../services/userServices.js")


async function readUser(req,res){
    try{
        const usuarios = await userService.readUser();

        res.json({users: usuarios}).status(200)
    }catch(e){
        res.json({erro: e.message})
    }

}


async function createUser(req,res){
    try{
        const {nome,email,senha} = req.body
        const userCreate = await userService.createUser(nome,email,senha)
        res.json({message: userCreate}).status(200)
    }catch(e){
        res.json({erro: e.message})
    }
}

async function updateUser(req, res){
    try{
        const {nome, email, senha} = req.body;
        const id = req.params.id
        const message = await userService.updateUser(id, nome, email, senha);

        res.json({message: message}).status(200)
    }catch(e){
        res.json({erro: e.message}).status(500);
    }
}

async function login(req,res){
    try{
        const {email, senha} = req.body
        const token = await userService.login(email, senha)
        res.json({message: token}).status(200)
    }catch(e){
        res.json({erro: e.message})
    }
}

async function deleteUser(req, res){
    try{
        const id = req.params.id;
        const message = await userService.deleteUser(id);

        res.json({message: message}).status(200)

    }catch(e){
        res.json({erro: e.message})
    }
}

module.exports = {
    login,
    createUser,
    readUser,
    updateUser,
    deleteUser,
}