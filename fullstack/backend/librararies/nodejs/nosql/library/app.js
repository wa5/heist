require('../library/config/db.config')


const {Villan}=require('../library/src/models')

// const pravalika=new Villan({name:'prakesh',movies:'pokiri',id:1})
// pravalika.save()

// const BHAVYA=new Villan({name:'JAGAPATI BABU',movies:'pokiri',id:1})
// BHAVYA.save()

Villan.findOne({id:1},(err,res)=>{
    if(err){
        console.log(err)
    }else
    {
        console.log(res) 
    }

})

// Villan.findOneAndDelete({id:1},(err,res)=>{
//     if(err){
//         console.log(err)
//     }else
//     {
//         console.log(res) 
//     }

// })


Villan.findOneAndUpdate({id:2},{name:'yogibabu'},{overwrite:false,new:true},
(err,res)=>{
    if(err){
        console.log(err)
    }else
    {
        console.log(res) 
    }

})