// Greeter.js
//这是common.js规范：module.exports   require引入 node服务器代码的写法
//import export
//webpack可以将它识别 
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!";
  return greet;
};