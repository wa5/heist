var express=require('express')
var router=express.Router()


router.route('/login')
.get((req,res)=>{
    res.render('login')
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