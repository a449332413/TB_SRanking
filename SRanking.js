// JavaScript Document
(function() {
 	if (document.domain.toLowerCase().indexOf("s.taobao.com") < 0) {
 		alert("请在淘宝搜索页面(s.taobao.com)下进行！");
 		return
 	}
	KISSY.DOM.append(KISSY.DOM.create("<div style='z-index: 999999;position: fixed;height: 50px; bottom: 0px;margin-left: 50%;'><div style='width: 1024px;height: 100%;margin-left: -512px;background-color: #fff;box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);border: 1px solid #E8E8E8;padding: 5px;'>加载成功！</div></div>"), "body");
}
)();
