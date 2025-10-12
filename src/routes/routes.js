const router = require("express").Router()
//const router = Router() //Tem algo aqui eu acho
const userController = require("../controller/userController")
const auth = require("../middleware/auth")

router.get("/ver/usuarios", auth, userController.readUser)
router.post("/login", userController.login)
router.post("/criar/usuario", userController.createUser)
router.patch("/atualizar/usuario/:id", auth, userController.updateUser)
router.delete("/deletar/usuario/:id", auth, userController.deleteUser)
module.exports = router