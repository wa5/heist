var express=require('express')
var router=express.Router()


router.route('/register')
.get((req,res)=>{
    res.render('register')
})
.post((req,res)=>{
    res.render('login')
})
.put((req,res)=>{
    res.render('login')
})
.delete((req,res)=>{
    res.render('login')
})

module.exports=router