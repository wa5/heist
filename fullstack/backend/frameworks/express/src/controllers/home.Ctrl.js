

var getHome = (req, res) => {
    var data = req.query
    var name = req.query.name

    res.render('home', { name: name })
}

var postHme = (req, res) => {
    res.send('hi hello post')
}
var putHme = (req, res) => {
    res.send('hi hello delete')
}
var deleteHome = (req, res) => {
    res.send('hi hello put')
}


module.exports={getHome,postHme,putHme,deleteHome}