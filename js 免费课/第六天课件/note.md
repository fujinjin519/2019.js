# 1、讲解函数的运行原理（画图）
- 外边拿不到函数体里边的东西
- 在函数体里边可以拿到外边的东西

    ```
    let num = 12;
    function fn(n,m){
        console.log(num);
        let name = 'xxx'
        let total = n+m;
        total = total/2;
        return total;
    }
    let res = fn(12, 13);
    console.log(res);
    console.log(name);
    ```
# 2、函数的选项卡不行的原因（画图）
- 举个例子：五个按钮的例子

# 3、函数中的arguments
    - 在这里列举一个任意数求和的例子
    ```
    1、用户到底传递多少个实参不定
    2、我们还得给每一个参数转数字

    1、arguments是一个类数组，是函数的实参集合，他里面存放着所有的实参
    2、不管写不写形参变量，arguments都存在，
    3、不管写不写实参，arguments都存在
    4、arguments.callee存储的是函数本身，在严格模式下已经禁止使用

            function sum(){
            let total = null;
            for (var i = 0; i < arguments.length; i++) {
                let item = Number(arguments[i]);
                if(isNaN(item)){
                    continue;
                }
                total+=item;
            }
            return total
        }
        let num = sum(1,2,3,4,true, '6');  
    ```
# 5、给函数的形参赋默认值
    ```
    function fn(n=1,m=2){
        console.log(n,m)
    }
    fn();
    fn(12,13);
    ```

# 4、箭头函数
 - 如果实参只有一个，可以省略函数的小括号
 - 如果函数的return后面只有一句话可以省略函数的大括号和return
 - 箭头函数中没有this和arguments
 - 如果箭头函数return的是一个对象，那就加上括号

 ```
 function fn(m){
     return m
 }

 let fn = (m)=>{
     return m
 }
 ```

 # 5、收缩/展开运算符
 ```
 重写任意数求和案例
            let  sum=(...g)=>{
            let total = null;
            for (var i = 0; i < g.length; i++) {
                let item = Number(arguments[i]);
                if(isNaN(item)){
                    continue;
                }
                total+=item;
            }
            return total
        }
        let num = sum(1,2,3,4,true, '6');  
 ```

 ```
 function fn(m){
     return m(3)
 }

 let f = fn(function(n){
     return n
 })
 console.log(f)
 ```