
var {sd}=require('../services/saveUserdataDB.service')

var getLogin = (req,res)=>{
    var userdata=req.query
    var name=req.query.name
    var email=req.query.email
    var password=req.query.password
    var phonno=req.query.phonno
sd(name,email,password,phonno)
    console.log(userdata)
    res.render('login',{name:name,email:email,password:password})
}

var postLogin = (req, res) => {
    res.send('hi hello post')
}
var putLogin = (req, res) => {
    res.send('hi hello delete')
}
var deleteLogin = (req, res) => {
    res.send('hi hello put')
}


module.exports={getLogin ,postLogin,putLogin,deleteLogin}