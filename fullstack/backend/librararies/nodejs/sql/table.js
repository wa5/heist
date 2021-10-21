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
var q="CREATE TABLE students (name VARCHAR(255),class VARCHAR(255),id INT(11))"
con.query(q,(err)=>{
if(err)throw err;
console.log('table created')
})
})