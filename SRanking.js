// JavaScript Document
(function() {
 	if (document.domain.toLowerCase().indexOf("s.taobao.com") < 0) {
 		alert("请在淘宝搜索页面(s.taobao.com)下进行！");
 		return
 	}
	KISSY.getScript('https://a449332413.github.io/TB_SRanking/SRanking.css');
	
	KISSY.DOM.append(KISSY.DOM.create("<div id='TB_SRanking'><div class='TB_SRcontent'>加载成功！</div></div>"), "body");
}
)();
