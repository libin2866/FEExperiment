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