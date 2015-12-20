// JavaScript Document
(function() {
 	if (!document.domain) {
 		alert("或不支持当前浏览器，请换其他浏览器尝试！");
 		return
 	}
 	if (document.domain.toLowerCase().indexOf("s.taobao.com") < 0) {
 		alert("不支持当前网站！");
 		return
 	}
	alert("ok!");
	alert(window.location.href);
}
)();