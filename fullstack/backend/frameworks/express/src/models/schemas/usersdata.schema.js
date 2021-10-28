require('../../../config/db.config')

var mongoose=require('mongoose')


const {Schema}=mongoose


var structureUsersData=new Schema(
    {
name:String,
movies:String,


    })


module.exports=mongoose.model('users',structureUsersData)