/**
 * @author: libin
 * @date: 15/7/26.
 */

/**
 * This following code is from ZHIHU. The purpose is to print myName
 */
(function () {
    var global = 'me-global';
    foo = function () {
        this.myName = "Foo function.";
    }
    foo.prototype.sayHello = function () {
        alert(this.myName);
        //console.log(myName);
    }
    foo.prototype.bar = function () {
        //setTimeout(this.sayHello, 1000);// 出现undefined ! 因为执行时变成了作用域变了。

        /**
         * 方案一：使用bind
         */
        setTimeout(this.sayHello.bind(this), 1000);

        /**方案二：
         * call 方法
         */
        setTimeout(this.sayHello.call(this), 1000);

        /**方案三
         * 闭包方法
         */
        setTimeout((function (_obj) {
            return _obj.sayHello();
        })(this), 1000);

    }

    //foo.prototype.bar = function () {

    //}
    var f = new foo;
    f.bar();
})();