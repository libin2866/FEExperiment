/**
 * Created by Libin on 2015/7/26.
 */

(function () {
    var html = document.documentElement;//��<html>������
    console.log(html + ' type:' + typeof (html));
    console.log(html === document.childNodes[0]);//true
    console.log(html === document.firstChild);//true

})();