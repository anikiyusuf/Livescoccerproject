require('dotenv').config()
const express = require("express")
const userRouter = require('./routes/userRoute')
const  { connectionMongoDB }  = require("./db") 
const app = express()
const PORT = process.env.PORT || 5000

connectionMongoDB()

//  Body Parser Middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static("public"));


// views 
app.set('view engine', 'ejs')
app.set('view engine')

app.use('/auth' , userRouter)


// Ejs file routes
app.get("/" , (req, res) => {
    res.render("index")
})

app.get("/Pay" , (req,res) => {
    res.render("Pay")
})

app.get("/Contact" , (req,res) => {
    res.render("Contact")
})
app.get("/Login", (req,res) => {
    res.render("Login")
})
app.get("/main" , (req,res) => {
    res.render("main")
})

app.get("/About" , (req,res)=> {
    res.render("About")
})
app.get("/Terms" , (req,res) => {
    res.render("Terms")
})
app.get("/error", (req, res) => {
    res.render("error");
  });  

app.use((err, req, res, next) => {
    console.log(err);
    res.status(400);
    res.redirect("/error")
  });


app.listen(PORT , () => {
    console.log(`Server running on localhost:${PORT}`)
})