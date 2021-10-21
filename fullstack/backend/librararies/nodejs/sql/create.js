var mysql=require('mysql')
var con=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:''
}
  
)
con.connect((err)=>{
if(err)throw err;
console.log('db connected')

con.query("CREATE DATABASE SRINU",(err)=>{
if(err)throw err;
console.log('i have cread db srinu')
})

})