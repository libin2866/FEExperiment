/**
 * Created by Libin on 2015/7/26.
 */
/**
 * 对DOM的操作基础
 */
(function () {
    var html = document.documentElement;//若无!Doctype 在是对<html>的引用
    console.log(html + ' type:' + typeof (html));//[object HTMLHtmlElement] type:object
    console.log(html === document.childNodes[0]);//无!DOCTYPE 返回true  现返回false
    console.log(html === document.firstChild);//无!DOCTYPEtrue现返回false
    console.log(document);
    var title = document.title;
    console.log(title);
    title = 'I am new title';
    document.title = 'New title';
    var url = document.URL;
    console.log(url);

    var nodes = document.getElementsByTagName('p');
    console.log(nodes);
    var node = document.getElementsByTagName('p')[1];
    console.log(node);
    var childNode = document.getElementsByTagName('p').childNodes;
    console.log(childNode);
    var childNodes = document.getElementsByClassName('test-class').childNodes;
    console.log(childNodes);


})();