var monGc=require('mongodb').MongoClient
var url='mongodb://127.0.0.1:27017/'

monGc.connect(url,(err,db)=>{


    if(err)throw err;
    console.log('db connected')

var dbo=db.db('bhvya')
dbo.createCollection('students',(err,res)=>{
    if(err)throw err
    console.log('table created')

var mydata={
    name:'bhavya',
    class:'mern class',
    brakfast:'dasa '
}


dbo.collection('students').insertOne(mydata,(err,res)=>{
    if(err)throw err
    console.log('inserted')
})
    db.close()
})


})