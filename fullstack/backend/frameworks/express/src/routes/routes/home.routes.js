var express=require('express')
var router=express.Router()



router.get('/home' ,(req, res) => {
    var data=req.query
    var name=req.query.name
   
       res.render('home',{name:name})
   })
   .post('/home', (req, res) => {
       res.send('hi hello post')
   })
   .delete('/home', (req, res) => {
       res.send('hi hello delete')
   })
   .put('/home', (req, res) => {
       res.send('hi hello put')
   })

   module.exports=router