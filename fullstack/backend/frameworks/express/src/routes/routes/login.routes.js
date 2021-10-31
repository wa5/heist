var express=require('express')
//var {sd}=require('../../services/saveUserdataDB.service')
var {getLogin ,postLogin,putLogin,deleteLogin}=require('../../controllers/login.Ctrl')
var router=express.Router()


router.route('/login')

.get(getLogin)
.post(postLogin)
.put(putLogin)
.delete(deleteLogin)

module.exports=router