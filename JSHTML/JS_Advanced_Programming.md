#Javascript Advanced Programming的读书笔记

##第六章 对象

###1、属性类型
#### 数据属性(JSAdvanceP6.html)
    [[Configurable]]:可否通过delete 删除/修改属性的特性或者能否把属性修改为访问器属性
    [[Enumerable]]:能否通过for-in 循环返回属性
    [[Writable]]:能否修改属性的值
    [[value]]:包含这个属性的数据值
    -------------
    ECMAscript 5下有Object.defineProperty()方法来设置属性
    
    Object.defineProperty(obj, prop, descriptor)
        obj:The object on which to define the property.
        prop:The name of the property to be defined or modified.
        descriptor:The descriptor for the property being defined or modified.必须是[configurable,enumerable,writable,value]其中之一
    
    注意：一旦把属性设置成不可配置，就无法改为可配置了。
#### 访问器属性
    [[Configurable]]:可否通过delete 删除/修改属性的特性或者能否把属性修改为数据属性
    [[Enumerable]]:能否通过for-in 循环返回属性
    [[Get]]:在读取属性时调用的函数，默认值为undefined
    [[Set]]:在设置属性时调用的函数，默认值为undefined
    ---------
    访问器属性必须通过Object.defineProperty()来定义!!!!!
###2、创建对象
####工厂模式
####通过构造函数创建
    使用new 操作符：
        (1)创建一个新对象;
        (2)将构造函数的作用域赋给新对象(因此this 指向了这个新对象);
        (3)执行构造函数中的代码;
        (4)返回新对象.
    任何函数只要通过new 操作符来调用，那它就可以作为构造函数；任何函数如果不通过new 操作符来调用，那它跟普通函数没有区别。
###3、原型模式
*使用原型对象的好处就是可以让所有对象实例共享它所包含的属性和方法（即不必在构造函数中定义对象实例的信息，而是将这些信息直接添加到原型对象中）。*
   
    每当代码读取某个对象的某个属性时，都会执行一次搜索，目标是具有给定名字的属性。
    搜索首先从对象实例本身开始。
    如果在实例中找到了具有给定名字的属性，则返回该属性的值；
    如果没有找到， 则继续搜索指针指向的原型对象， 在原型对象中查找具有给定名字的属性。如果在原型对象中找到了这个属性，则返回该属性的值。
_用hasOwnProperty()方法可以检测一个属性是存在于实例中，还是存在于原型中。_
    
**使用for-in 循环时，返回的是所有能够通过对象访问的，可枚举(enumerated)属性，包括存在实例中的属性和存在原型中的属性；**
    [[Enumerate]]设置为false 的实例属性也会再for-in 中返回（注意！！！实例中的属性）

