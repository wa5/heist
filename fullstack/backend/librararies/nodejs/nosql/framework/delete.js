var monGc=require('mongodb').MongoClient
var url='mongodb://127.0.0.1:27017/'

monGc.connect(url,(err,db)=>{


    if(err)throw err;
    console.log('db connected')

var dbo=db.db('bhvya')
var mq={id:1}
dbo.collection('students').deleteOne(mq,(err,res)=>{
if(err)throw err
console.log('deleted')
db.close()
})


    
})
