var {Villan,Users}=require('../models/index')
var {sendNotificationMail}=require('../helpers/email.helpers')

function sd(name,email,password,phonno){
const person=new  Users({name:name,email:email,password:password,phonno:phonno})

person.save()
var subject="u r registerd"
var text=`thank u ${name} for registering `

sendNotificationMail(email,subject,text)
}

module.exports={sd}