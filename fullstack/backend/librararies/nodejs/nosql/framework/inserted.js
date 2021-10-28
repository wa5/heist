var monGc=require('mongodb').MongoClient
var url='mongodb://127.0.0.1:27017/'

monGc.connect(url,(err,db)=>{


    if(err)throw err;
    console.log('db connected')

var dbo=db.db('bhvya')


var mydata={
    name:'xyz',
    class:'mern classs',
    brakfast:'puri ',
    id:1
}


dbo.collection('students').insertOne(mydata,(err,res)=>{
    if(err)throw err
    console.log('inserted')
    db.close()
})
    
})
