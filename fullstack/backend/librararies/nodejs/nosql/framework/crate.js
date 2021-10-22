var mogoC=require('mongodb').MongoClient;
var url='mongodb://127.0.0.1:27017/'

mogoC.connect(url,(err,db)=>{
if(err)throw err;
console.log('dabconnected')


var dbo=db.db('testingdb')


dbo.createCollection('students',(err,res)=>{
   if(err)throw err;
    console.log('table created')
    db.close()
})

})