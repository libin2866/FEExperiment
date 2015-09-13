#我的经验教训

##cookie
    禁用cookie 后session 还能用吗？
        session 在 cookie 里会存放session id，禁用cookie 了，session id 可以改用url 拼接方式来传输
    可以保存4096个字节(Byte),4KB
#Window及document对象的区别
    http://blog.sina.com.cn/s/blog_74f1a3280102uyxp.html

##document.domain  进行跨域
    (http://segmentfault.com/a/1190000003642057)
    使用条件:
        1. 有其他页面window 对象的引用
        2. 二级域名相同(*.baidu.com)
        3. 协议相同
        4. 端口相同
    补充:
        * x.one.example.com 和 y.one.example.com 可以将 document.domain 设置为 one.example.com，也可以设置为 example.com。
        * document.domain 只能设置为当前域名的一个后缀，并且包括二级域名或以上（.edu.cn 这种整个算顶级域名）
###window.name 可以在不同域中进行
##new   
    把函数当做构造器使用时，如果手动返回一个值，要看这个值的是否简单类型；是的话等同于不写返回；不是简单类型的话，得到手动返回的值;
    如果不手动写返回，就会默认从原型创建一个对象用于返回。
    function Foo(){
     this.name ='test';
     return name;//->不写返回
    }
    var foo = new Foo();
    
####arguments.length->实参; foo.length->形参
####实参可以从arguments 中修改
    function foo(a) {
        arguments[0] = 2;
        alert(a);//2
    }
    foo(1);
###delete 无法删除预定义对象(Object,Function,Array,Math 等)的特定属性
    function foo(){};
    delete foo.length;
    alert(typeof foo.length)//number
    
##类型转换
    http://www.w3school.com.cn/js/pro_js_typeconversion.asp
   
   
##replace
    ("HelloJavascript").replace(/[A-Z]/g,"_$&");/_Hello_Javascript
    可以用$& 表示匹配的内容。
