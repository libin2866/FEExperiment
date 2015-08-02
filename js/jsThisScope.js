/**
 * @author: libin
 * @date: 15/7/26.
 */

(function () {

    var a = new String('test');
    console.log(a); // 直接访问，在VO(globalContext)里找到："test"
    console.log(window['a']); // 间接通过global访问：global === VO(globalContext): "test"
    console.log(a === this.a); // true
    var aKey = 'a';
    console.log(window[aKey]); // 间接通过动态属性名称访问："test"
    function foo(x, y, z) {

        // 声明的函数参数数量arguments (x, y, z)
        console.log(foo.length); // 3
        // 真正传进来的参数个数(only x, y)
        console.log(arguments.length); // 2
        // 参数的callee是函数自身
        console.log(arguments.callee === foo); // true
        // 参数共享
        console.log(x === arguments[0]); // true
        console.log(x); // 10
        arguments[0] = 20;
        console.log(x); // 20
        x = 30;
        console.log(arguments[0]); // 30
        // 不过，没有传进来的参数z，和参数的第3个索引值是不共享的!!!!!!!!!!!!!!!!!!!!
        z = 40;
        console.log(arguments[2]); // undefined
        arguments[2] = 50;
        console.log(z); // 40
    }

    foo(10, 20);

    function newFunc() {
        console.log(a); // undefined
        // console.log(b); //报错 "b" 没有声明

        b = 10;
        var a = 20;
    }

    newFunc();

    function ListCommon2(afirst) {
        var first = afirst;
        this.value = afirst;
        console.log(this);
        this.do1 = function () {
            console.log("first do" + first);
        }

    }

    ListCommon2.prototype.do2 = function () {
        //  alert("first do"+first);//会出错，不能访问first
        console.log(this.value);
        this.do1();
    }
    ListCommon2("test");
    var shap = new ListCommon2("tes");
    shap.do1();
})();