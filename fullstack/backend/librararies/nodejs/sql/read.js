var mysql=require('mysql')
var con=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'srinu'
}
  
)


con.connect((err)=>{
if(err)throw err;
console.log('db connected')
var q="SELECT * FROM `students`  "
con.query(q,(err,res)=>{
if(err)throw err;
console.log(res)
})
})