var nodemailer=require('nodemailer')


var transporter=nodemailer.createTransport({
  service:'gmail' ,
  auth:{
      user:'waseemahmed116@gmail.com',
      pass:'hghg'
  }
})

var maioption={
    from:'waseemahmed116@gmail.com',
    to:'joseph27397@gmail.com',
    subject:'test mail from ism univ',
    text:'enjoy the  vecation of dasara'
}

transporter.sendMail(maioption,(err,info)=>{
if(err){
    console.log(err)
}else{
    console.log("mail send")
}
})