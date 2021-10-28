require('../../../config/db.config')

var mongoose=require('mongoose')


const {Schema}=mongoose


var structureVillans=new Schema(
    {
name:String,
movies:String,
id:Number

    })


module.exports=mongoose.model('villan',structureVillans)