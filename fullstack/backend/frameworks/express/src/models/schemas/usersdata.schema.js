require('../../../config/db.config')

var mongoose=require('mongoose')


const {Schema}=mongoose


var structureUsersData=new Schema(
    {
name:String,
phonno:Number,
email:String,
password:String


    })


module.exports=mongoose.model('users',structureUsersData)