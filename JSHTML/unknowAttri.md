#记录一些我不确定或者不知道的东西

###对象

#####关于报错与undefined
        function test(a) {
            return a + this.b;
        }
        function test2(a) {
            return a + b;
        }
        console.log(test(1));//NaN
    //    console.log(test2(1));//b is not defined;
#####依旧关于undefined    
        var x = new Boolean(false);
        if (x) {
            alert('hi');//会alert
        }
        console.log(x);
        var y = Boolean(0);
        if (y) {
            alert('hello');//不会alert
        }
###typeof instaceof
        typeof会把所有的数组类型以及用户自定义类型判断为object，从而无法知道更确切的信息。而constructor却可以解决这个问题。
######typeof
返回 **number,boolean,string,object,undefined,function**.语法为typeof(data) 或 typeof data
######instanceof
判断一个对象是否为某一数据类型，或一个变量是否为一个对象的实例; **返回boolean类型**  语法为 o instanceof A

        var i;
        console.log(typeof(i));//undefined
        //    console.log(i.constructor);//返回错误 Uncaught TypeError: Cannot read property 'constructor' of undefined
    
        console.info('Array')
        var arr = [], arr2 = new Array(1, 2, 3);
        console.log(typeof(arr));//object
        console.log(typeof(arr2));//object
        console.log(arr instanceof Array);//true
        console.log(arr2 instanceof Array);//true
        console.log(arr.constructor);//function array(){[native code]}
        console.log(arr2.constructor);//function array(){[native code]}
    
        console.info('String type')
        var str = 'this is a string', strObj = new String('this is a objString');
        console.log(typeof(str));//string
        console.log(str instanceof  String);//false!!!
        console.log(strObj instanceof  String);//true
        console.log(typeof(strObj));//object
        console.log(str.constructor);//function String() { [native code] }
        console.log(strObj.constructor);//function String() { [native code] }
####