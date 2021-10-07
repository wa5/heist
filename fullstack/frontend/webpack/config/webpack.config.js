
const path=require("path")

module.exports={
    //mode:"development",
    mode:"production",
    entry:'./src/index.js',
    output:{

        path:path.resolve(__dirname,'public'),
        filename:'main.js'
    }
}