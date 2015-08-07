/**
 * @author: libin
 * @date: 15/8/6.
 */

(function () {
    var Person = function (name) {
        this.name = name;
        this.say = function () {
            console.log('My name is' + this.name);
        }
    };
    var me = new Person('test');
    console.log(me.constructor);//查看构造器
    me.say();
    console.log(me instanceof Person);//判断是否由指定构造器构造  true

})();

/**
 * 对象的引用
 */
console.info('---对象引用---');
(function () {
    var original = {howmany: 1};
    var copy = original;
    copy.howmany = 2;
    console.log(original.howmany);//2

    //将对象传递给函数也一样
    var funcopy = function (o) {
        o.howmany = 3;
    }
    funcopy(original);
    console.log(original.howmany);//3
})();

/**
 * 对象比较：当且仅当两个引用指向同一个对象时为true
 */
console.info('---对象比较---');
(function(){
    var obj1 ={name:'test'};
    var obj2 = {name:'test'};
    var obj3 = obj1;
    console.log(obj1 === obj2);//false
    console.log(obj1 == obj2);//false
    console.log(obj1 === obj3);//true
})();

/**
 * 数组方法
 */
console.info('---数组方法---');
(function(){
    var arr1 = new Array();
    console.log(typeof  arr1);//object
    var arr2 =[];
    console.log(typeof  arr2);//object  typeof 返回的是基本类型的几种，array 属于object 类型
    console.log(arr1.push('new'));//push返回长度 arr1[arr1.length]='new'
    console.log(arr1.pop());//pop 返回 pop 出的内容
    arr1 =[1,3,2,4];
    console.log(arr1.sort());//[1,2,3,4]
    console.log(arr1.join(' '));//1 2 3 4

    //slice 与 splice
    arr2 = arr1.slice(0,3);
    console.log(arr2);//arr1 不会变  slice 选择0为基数的首尾  [1，2，3]

    arr2 = arr1.splice(2,4);
    console.log(arr1);//[1,2] splice 会改变原来的数组，即分割
    console.log(arr2);//[3,4，undefined]  多余的部分会填充undefined.

})();

/**
 * 函数方法
 */
console.info('---Function---');
(function () {
    var fun1 = fun1
})();