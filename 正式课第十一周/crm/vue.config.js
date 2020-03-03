//这个文件针对vue/cli项目的配置文件
module.exports={
    publicPath:"./",
    lintOnSave:false,
    devServer:{
       proxy:"http://localhost:3000"
    },
    // configureWebpack:{
    //     modules:{
    //         rules:[{
               
    //         }]
    //     }

    // }
}