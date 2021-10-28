var monGc=require('mongodb').MongoClient
var url='mongodb://127.0.0.1:27017/'

monGc.connect(url,(err,db)=>{


    if(err)throw err;
    console.log('db connected')

var dbo=db.db('bhvya')
var mq={name:'xyz'}
var newvalue={$set:{name:'josoph'}}
dbo.collection('students').findOneAndUpdate(mq,newvalue,(err,res)=>{
if(err)throw err
console.log('updated')
db.close()
})



    
})
