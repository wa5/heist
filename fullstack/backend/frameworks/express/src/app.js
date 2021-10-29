var express = require('express')
var app = express()
require('../config/db.config')
//frontebd seetings
var path=require('path')
var ejs=require('ejs')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//apis

var address=require('./routes/index')






//db connection
var {Users}=require('../src/models/index')

var capture=(req,res,next)=>{

var data1=req.params.name
var data2=req.params.movies
const user1=new Users({name:data1,movies:data2})
user1.save()
console.log('data from midle ware')
    next()
}



//apis calling

app.use('/api',address.login)
app.use('/api',address.register)
app.use('/api',address.home)








app.listen('8000', () => {
    console.log('8000')
})