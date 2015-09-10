#All about Array

##基本知识点
    var arr = new Array(3);
    arr;//
###判断是否为Array 类型
1) instanceof 
    arr instanceof Array;//true
2)  Object.prototype.toString(arr)=='[Object Array]'

3) constructor
    arr.constructor == Array
## splice , slice 等基本方法(replace 存在于string 中)
###splice (改变原数组) 
**splice 的返回值是被删掉的元素，会对原数组产生影响**

**changes the content of an array by removing existing elements and/or adding new elements.**

    分割/插入字符串  array.splice(start, deleteCount[, item1[, item2[, ...]]])
    插入：
    var arr =[1,2,3]
    arr.splice(1,0,'a','b','c');
    console.log(arr);//[1,'a','b','c',2,3]
    删除:
    arr.splice(1,1);
    console.log(arr);//[1,'b','c',2,3];
###slice (不改变原数组)
**返回操作结果start --end之间的元素， 不会！对原数组产生影响**

**The slice() method returns a shallow copy of a portion of an array into a new array object.**

    选取部分字符串  array.slice(start,[end]);
    arr.slice(1,2);//['b'];
###concat 合并
    arr.concat(); 与slice一样，有一个新数组。
    
###reverse 反转 sort 排序
    arr.reverse(); arr.sort()

###push,pop,shift
**arr.push(1);返回 arr.length**

    arr.pop();arr.shift();
    
###join 字符串化
    arrayObj.join(separator); //返回字符串，这个字符串将数组的每一个元素值连接在一起，中间用 separator 隔开。
    toLocaleString 、toString 、valueOf：可以看作是join的特殊用法，不常用

###删除指定位置的内容
    var arr = [1,2,3,4];
    arr.splice(1,1);//splice (index,count) 删除

###arr.forEach()
    executes a provided function once per array element.
    function logArrayElements(element, index, array) {
      console.log('a[' + index + '] = ' + element);
    }
    
    // Note elision, there is no member at 2 so it isn't visited
    [2, 5, , 9].forEach(logArrayElements);
    // logs:
    // a[0] = 2
    // a[1] = 5
    // a[3] = 9

##Array 相关考题
####去除重复的内容
    function removeDuplicate(arr){
        var obj ={},newArr=[];
        for(var i =0;i<arr.length;++i){
          if(!obj[arr[i]]){
            obj[arr[i]]=1;
            newArr.push(arr[i]);
          }
        }
        return newArr;
    }
        
####嵌套的数组整平
        var arr =[1,[2,3],[4,5,6,[7,8,[9,10]]],11];
        function flatenArray(arr){
           return  arr.toString().split(',');
        }
        console.log(flatenArray(arr));
####字符串与数组相互转换
    var arr = "this is a string".split(' ');
    var str = [1,2,3].join("");
    