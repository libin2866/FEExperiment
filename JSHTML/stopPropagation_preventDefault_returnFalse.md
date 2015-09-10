#stopPropagation, preventDefault 和 return false 的区别
    因为有父, 子节点同在, 因为有监听事件和浏览器默认动作之分. 使用 JavaScript 时为了达到预期效果经常需要阻止事件和动作执行.
     一般我们会用到三种方法, 分别是 stopPropagation(), preventDefault() 和 return false.
     http://www.neoease.com/stoppropagation-and-preventdefault-and-return-false/
     
##术语
**监听事件**  在在节点上能被监听的页面操作. 如: select 节点的 change 事件, a 节点的 click 事件.

**浏览器默认动作** 指特定页面元素上带有的功能. 如: 点击 a 链接节点的跳转动作, 表单提交动作.

###stopPropagation
    因为事件可以在各层级的节点中传递, 不管是冒泡还是捕获, 有时我们希望事件在特定节点执行完之后不再传递, 可以使用事件对象的 stopPropagation() 方法.
    
    假设页面上存在一个浮动弹出层, 显示在最前面, 当点击弹出层以外页面区域时, 隐藏弹出层. 为了做到这样的效果, 我们会监听 documentElement 的 click 事件,
     一旦事件被触发即隐藏弹出层. 但是...
   
    这显然存在问题. 当用户点击弹出层时, 我们不希望它隐藏掉. 但因为事件的冒泡传递, documentElement 的 click 事件也会被触发. 
    这个时候, 我们可以监听弹出层的 click 事件, 并使用 stopPropagation() 方法阻止冒泡. 请参考下面的代码.
    // 在弹出对话框上点击时, 不进行任何页面操作, 并阻止冒泡
    document.getElementById('dialog').onclick = function(ev) {
    	ev.stopPropagation();
    };
     
    // 在 documentElement 节点上监听到点击事件时, 隐藏对话框
    document.documentElement.onclick = function(ev) {
    	document.getElementById('dialog').style.display = 'none';
    };
    
    //IE8以下
    // 在弹出对话框上点击时, 不进行任何页面操作, 并阻止冒泡
    document.getElementById('dialog').onclick = function(ev) {
    	ev.cancelBubble = false;
    };
###preventDefault
    一个带事件监听的链接代码如下:
    
    <a href="http://w3c.org" onclick="alert('JavaScript Click Event');">点击链接</a>
    点击该链接, 显示对话框后跳转页面. 由此可知, 除了执行监听事件还会触发浏览器默认动作; 执行监听事件在前, 触发浏览器默认动作在后.
    
    这里有个经典示例, 我们希望点击链接在新窗口打开页面, 但不希望当前页面跳转. 这个时候可以使用 preventDefault() 阻止后面将要执行的浏览器默认动作.
    
    <a id="link" href="http://w3c.org">W3C 首页链接</a>
     
    <script>
    // 在新窗口, 打开页面
    document.getElementById('link').onclick = function(ev) {
    	// 阻止浏览器默认动作 (页面跳转)
    	ev.preventDefault();
    	// 在新窗口打开页面
    	window.open(this.href);
    };
    </script>
    
###return false
    退出执行, return false 之后的所有触发事件和动作都不会被执行. 有时候 return false 可以用来替代 stopPropagation() 和 preventDefault(),
     比如我们上面新窗口打开链接的例子, 如:
    
    <a id="link" href="http://w3c.org">W3C 首页链接</a>
     
    <script>
    // 在新窗口, 打开页面
    document.getElementById('link').onclick = function(ev) {
    	// 在新窗口打开页面
    	window.open(this.href);
    	// 退出执行 (在监听事件之后执行的浏览器默认动作将不会被执行)
    	return false;
    };
    </script>

有人认为 return false = stopPropagation() + preventDefault(), 其实是错的. return false 不但阻止事件, 还可以返回对象, 跳出循环等... 方便地一刀切而不够灵活, 滥用易出错.
    
