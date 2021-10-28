var monGc=require('mongodb').MongoClient
var url='mongodb://127.0.0.1:27017/'

monGc.connect(url,(err,db)=>{


    if(err)throw err;
    console.log('db connected')

var dbo=db.db('bhvya')

dbo.collection('students').findOne({name:'pravalika'},(err,res)=>{
    if(err)throw err
    console.log(res)
db.close()
})



    
})
