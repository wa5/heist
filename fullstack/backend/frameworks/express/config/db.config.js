var mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/pravalika',(err,res)=>{
    if(err)throw err
    console.log('db conected')
})