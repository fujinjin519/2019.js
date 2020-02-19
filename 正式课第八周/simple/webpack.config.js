//webpack是基于node运行的，这个最终要在node环境下运行。
//入口出口的文件
//真实项目，使用ES6开发，上线前，把ES6编译成ES5
let path=require("path");
let WebpackHtmlPlugin = require("html-webpack-plugin"); 
module.exports = {
  //__dirname:当前simple文件夹的绝对路径
  mode: "development",//开发模式（不压缩）production:生产环境（压缩的）输入命令npm  run build
  devtool: 'eval-source-map', // 调试，修改(代码压缩到一个不知道那个错了可以用这个)
  entry: __dirname + "/app/main.js",//webpack打包的入口
  output: {  //出口
    path: __dirname + "/public",//打包后的文件存放的路径
    filename: "bundle.js"//打包之后的js的文件名
  },

  // entry:{//多个入口的配置，会生成两个多的js
  //   main:__dirname+"/app/main.js",
  //   greeter:__dirname+"/app/greeter.js",
  // },
  // output:{
  //   path:__dirname+"/public",
  //   filename:"[name].js"
  // },
  devServer: { //配置dev-server的选项  构建本地服务器
    contentBase: "./public",//启动服务的根目录
    inline: true,//实时刷新
    port: 8080,//在当前项目8080 端口下运行
    proxy: {//代理 跨域参数设置
      "/api": {//如果接口中函数api,那么就要跨域
        target: "http://localhost:9000",//将要跨域请求的服务器地址
        secure: false,//目标服务器是否是安全协议
        changeOrigin: false,//是否修改请求的源头

      }
    }
  },
  module: { //loader
    rules: [ //rules是一个数组
      {
        test: /(\.jsx|\.js)$/,//用正则匹配文件的后缀名，匹配文件要用loader处理
        use: ["babel-loader"],//要是使用的loader,直接写use:里面放多个loader
        //npm install  babel-loader@7.1.5 对应的版本号要对
        exclude: "/node_modules/"//这个文件夹下的js文件不需要使用loader处理 

      }, {
        test: /\.css$/, //配置css文件的
        use: ["style-loader", "css-loader"]//style-loader会默认生成一个
        //post-loader. 给浏览器加前缀
      },
      {
        test: /(\.png|\.jpg|.gif)$/,//配置图片的格式
        use: [{
          loader: "url-loader", //安装一个url-loader，npm i url-loader --save-dev
          options: {
            limit: 8192
          }
        }]

      },{
        test:/\.less$/,//预编译，不容易出现冲突，也是处理css的
        use:["style-loader","css-loader","less-loader"] //有就不下载了没有需要下载
        //这个顺序不能颠倒，webpack,会从后往前进行解析
      }
    ]
  },
  plugins:[ //插件 ，打包好的文件插入到项目中自动生成一个html
    new WebpackHtmlPlugin({
      template:__dirname+"/index.html"
    })

  ]
    

  
}