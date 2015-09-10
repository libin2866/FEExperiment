#All About Prototype

##Prototype 继承

    
    
    
##hasOwnProperty

        function P2(){
            this.height ='123';
        }

        function P1() {
            this.name = "test";
        }
        P1.prototype = new P2();
        var p = new P1();
        p.age = 1;
        console.log(p.hasOwnProperty('name'));//true  因为p 就是P1new 出来的，所以不是在原型链上，因而是true
        console.log(p.hasOwnProperty('age'));//true
        console.log(p.hasOwnProperty('height'));//false
        console.log(p.height);//123// 这就是原型链上的属性
        