require("dotenv").config()

const router = require("./routes/routes.js")
const express = require("express") 

const app = express()
const porta = process.env.SERVER_PORT
const host = process.env.SERVER_HOST

app.use(express.json())
app.use(router)

app.listen(porta, host, () => {
    console.log("ta funcionando");

})