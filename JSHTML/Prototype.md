#All About Prototype

##Inheritance 继承

###Propertype chain
        function A(){
            this.name = "A";
        }
        function B(){
            this.type = "B";
        }
        B.prototype = new A();
        var b = new B({c:"c"});
        console.log(b.c);//c
        --------------------
        function Father(){}; 
        Father.prototype.familyName = 'Good';
          function Child(){}; 
        Child.prototype = new Father();  
        var c = new Child(); 
        console.log(c.familyName);    // 'Good'
###constructor
        function Father(){  
            this.familyName = 'Good'; 
         };
          function Child(){  
            Father.call(this); 
         };  
        var c = new Child();
         console.log(c.familyName);     // 'Good'
    
    
    
##hasOwnProperty
    在prototype上的属性除非手动设置enumerable，否则都是false

        function P2(){
            this.height ='123';
        }

        function P1() {
            this.name = "test";
        }
        P1.prototype = new P2();
        P1.prototype.test = 'test';
        var p = new P1();
        p.age = 1;
        console.log(p.hasOwnProperty('name'));//true  因为p 就是P1new 出来的，所以不是在原型链上，因而是true
        console.log(p.hasOwnProperty('age'));//true
        console.log(p.hasOwnProperty('height'));//false
        console.log(p.hasOwnProperty('test'));//false　这个是加在原型上的，所以不是enumerable
        console.log(p.height);//123// 这就是原型链上的属性
        
###prototype

在通过构造函数实例化对象时,请勿把方法放在构造函数中,因为每个函数(在这里指方法方法)都是对象,
每次实例化一个对象时这个对象中会保存每一构造函数中的方法,这是很影响性能的.解决办法是把这些方法放在prototype属性中.


   