#All about Clearing float
__clearfloat2.html__
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
    </ul>
##名词解释
###高度塌陷
    发生在inline 元素，元素浮动后，高度变为0的情况
    
##合并元素并清除浮动方法：
###display:inline-block
            ul{
                overflow: hidden;
                border: 1px solid #ededed;
            }
            li{
                display: inline-block;
                border: 1px solid #00ff00;
            }
            
            此方法会导致item 之间出现间隙:
            解决方法一： 将<li>直接连起来写，不换行
            <ul>
                <li>item1</li><li>item2</li>
                <li>item3</li>
                <li>item4</li>
                <li>item5</li>
            </ul>
            item1与item2就不会出现间隙了。
            解决方法二:
            ul{font-size:0}//可能有兼容性问题
            li{font-size:16px}//需要设置回来
            解决方法三：
            li{margin-left:-0.xem} 需要手动设定大小
###float:left
####插入空白div class="clear-fix"方法
####:after方法
    在父元素上加入
            .class:after{
                content: ".";
                display: block;
                height: 0;
                clear: both;
                visibility: hidden;
            }
            或者
            .clearfix:after{
                 content: " ";
                 display: block;
                 height: 0;
                 clear: both;
                 /*visibility: hidden;若设置content 不是空格 则需要这个来隐藏内容*/
             }