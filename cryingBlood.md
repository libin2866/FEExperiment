#我的经验教训

##cookie
    禁用cookie 后session 还能用吗？
        session 在 cookie 里会存放session id，禁用cookie 了，session id 可以改用url 拼接方式来传输
    可以保存4096个字节(Byte),4KB


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