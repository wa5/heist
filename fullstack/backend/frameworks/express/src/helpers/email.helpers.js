var nodemailer=require('nodemailer')

function sendNotificationMail(emailid,subject,text){

    var transporter=nodemailer.createTransport({
        service:'gmail' ,
        auth:{
            user:'waseemahmed116@gmail.com',
            pass:''
        }
      })
      
      var maioption={
          from:'waseemahmed116@gmail.com',
          to:emailid,
          subject:subject,
          text:text
      }
      
      transporter.sendMail(maioption,(err,info)=>{
      if(err){
          console.log(err)
      }else{
          console.log("mail send")
      }
      })
}

module.exports={sendNotificationMail}
