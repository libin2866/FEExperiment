#Javascript 面向对象编程指南  阅读笔记
**好记性不如烂MD**

##基本数据类型

    false&&false||true&&true ;//true 相当于  (flase&&false)||(true&&true)
     var testStr='abc';
     testStr++;//NaN
     Boolean(0);//false
     Boolean(NaN);//false
     Boolean(!0);true
     Boolean("");false
     Boolean({});//true!!
     Boolean(null);//false
####增加Array 元素
    var a=[1,2]; a[2]='three'；//a[1,2,'three'];
    a[5] = 'six';//1,2,'three,undefined,undefined,'six'//自动用undefined填充间隔
####删除元素
    var a=[1,2,3];
    delete a[1];
    >>true
    >>>a  [1,undefined,3] //删除后元素的长度不会受到影响
    
####通过数组的方式来访问字符串的某个字符
    var s = 'one';
    s[0];//'o'
    s[1];//'n'
    
## 函数

#### 函数覆盖本身
     function myA() {
            console.log(myA);
    //        console.log(arguments.callee);
            myA = function () {
                console.log('This is b');
            }
            return myA;
        }
        myA = myA();//打出 myA 的 function 内容，并且myA 被覆盖
        myA();