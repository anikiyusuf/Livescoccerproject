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


app.use("/", require("./routes/viewsRoutes"))
app.use('/auth' , userRouter)





// app.get("/error", (req, res) => {
//     res.render("error");
//   });  

app.use((err, req, res, next) => {
    console.log(err);
    res.status(400);
    res.redirect("/error")
  });


app.listen(PORT , () => {
    console.log(`Server running on localhost:${PORT}`)
})

