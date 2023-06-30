const homePage = async (req,res) => {
    res.render('index')
}
const About = async (req,res) => {
    res.render('About')
}
const Contact = async (req,res) => {
    res.render('Contact')
}
const Create = async (req,res) => {
    res.render('Create')
}
const game = async (req,res) => {
    res.render('game')
}
const Pay = async (req,res) => {
    res.render('Pay')
}
const Sign = async (req,res) => {
    res.render('Sign')
}
const Terms = async (req,res) => {
    res.render('Terms')
}

const error = async (req,res) =>{
    res.render('error')
}

module.exports = {
    homePage,
    Sign,
    Terms,
    Pay,
    game,
    Create,
    About,
    Contact,
    error
}