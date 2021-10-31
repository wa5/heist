var express=require('express')
var router=express.Router()
var {getHome,postHme,putHme,deleteHome}=require('../../controllers/home.Ctrl')


router.route('/home')
.get(getHome)
   .post(postHme)
   .delete(deleteHome)
   .put(putHme)

   module.exports=router