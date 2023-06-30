const express = require("express")
 const  {
    homePage,
    Sign,
    Terms,
    Pay,
    game,
    Create,
    About,
    Contact, 
    error
} = require("../controller/viewsController")
const viewRouter = express.Router()

viewRouter.get("/" , homePage)
viewRouter.get("/sign" , Sign)
viewRouter.get("/Terms" , Terms)
viewRouter.get("/Pay" , Pay)
viewRouter.get("/game" , game)
viewRouter.get("/create" , Create)
viewRouter.get("/About" , About) 
viewRouter.get("/Contact" , Contact) 
viewRouter.get("/error", error )


module.exports = viewRouter