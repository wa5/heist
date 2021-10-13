const http=require('http')



const server=http.createServer((req,res)=>{

    if(req.url=='/charan'){
        res.write('how r u all im charan')
        res.end()
    }
    if(req.url=='/hemanth'){
        res.write('how r u all im hemanth')
        res.end()
    }
    if(req.url=='/josoph'){
        res.write('how r u all im josoph')
        res.end()
    }

})
server.listen(3006,()=>{
    console.log('server strarted on 3006 port')
})