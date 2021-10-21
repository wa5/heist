

var http=require('http')
http.createServer((req,res)=>{
    res.write('<h1>hello all</h1>')
    res.end()
}).listen(3002,()=>{
    console.log('3002')
})