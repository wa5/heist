const url=require('url')
var addr='http://localhost:3006/josoph?name=josoph&year=2021&month=oct'

var q=url.parse(addr,true)



console.log(q.host)
console.log(q.pathname)
console.log(q.search)

var qdata=q.query
console.log(qdata.month)

