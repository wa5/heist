var express = require('express')
var app = express()
require('../config/db.config')

//db connection
var {Users}=require('../src/models/index')

var capture=(req,res,next)=>{

var data1=req.params.name
var data2=req.params.movies
const user1=new Users({name:data1,movies:data2})
user1.save()
console.log('data from midle ware')
    next()
}



app.get('/home/:name/:movies',capture, (req, res) => {
    var name = req.params
    console.log(name)
    var data = name.name
    res.send(data)
})
app.post('/home', (req, res) => {
    res.send('hi hello post')
})
app.delete('/home', (req, res) => {
    res.send('hi hello delete')
})
app.put('/home', (req, res) => {
    res.send('hi hello put')
})

app.route('/bhavya')
.get( (req, res) => {
    res.send('hello')
})
.post((req, res) => {
    res.send('hello')
})
.put( (req, res) => {
    res.send('hello')
})
.delete( (req, res) => {
    res.send('hello')
})


app.route('/dance')
.get( (req, res) => {
    res.send('hello')
})
.post((req, res) => {
    res.send('hello')
})
.put( (req, res) => {
    res.send('hello')
})
.delete( (req, res) => {
    res.send('hello')
})


app.listen('8000', () => {
    console.log('8000')
})