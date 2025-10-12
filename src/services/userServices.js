require("dotenv").config()
const database = require("../database/export")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function readUser(){
    const usuario = await database("usuario").select("*")

    if(usuario.length===0){
        throw new Error("Nao tem registro!")
    }

    return usuario
}


async function createUser(nome,email,senha){
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(senha,salt)

    const usuario = {
        nome: nome,
        email: email,
        senha: hash
    }
    await database("usuario").insert(usuario)

    return "Usuario criado com sucesso!"

}

async function updateUser(id, nome, email, senha){
    const busca = await database("usuario").select("*").where({id:id}).first();
    if(!busca){
        throw new Error("Usuario nao encontrado");
    }

    if(nome === "" || email === "" || senha === ""){
        throw new Error("Todos os campos devem ser preenchidos");
    }

    let hash
    if(senha){
        const salt = bcrypt.genSaltSync();
        hash = bcrypt.hashSync(senha, salt);
    }
    const novo_usuario = {
        nome: nome,
        email: email,
        senha: hash
    }

    await database("usuario").update(novo_usuario).where({id:id});

    return "usuario atualizado"

}

async function login(email,senha){
    const usuario = await database("usuario").select("*").where({email:email}).first()
    
    if(!usuario){
        throw new Error("Não tem aqui")
    }
    const compara = bcrypt.compareSync(senha, usuario.senha)
    if(!compara){
        throw new Error("Senha incorreta!")
    }

    const payload ={
        id: usuario.id
    }

    const token = jwt.sign(payload,process.env.JWT_KEY,{expiresIn: '24h'})
    return token
}

async function deleteUser(id){
    const user = await database("usuario").select("*").where({id:id}).first();

    if(!user){
        throw new Error("Usuario nao encontrado");
    }
    await database("usuario").delete().where({id:id})

    return "usuario foi deletado com sucesso!"
}

module.exports = {
    login,
    createUser,
    readUser,
    updateUser,
    deleteUser,
}