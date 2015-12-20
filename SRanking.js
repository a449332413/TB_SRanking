// JavaScript Document
(function() {
 	if (document.domain.toLowerCase().indexOf("s.taobao.com") < 0) {
 		alert("请在淘宝搜索页面(s.taobao.com)下进行！");
 		return
 	}
	KISSY.getScript('https://a449332413.github.io/TB_SRanking/SRanking.css');
	
	KISSY.DOM.append(KISSY.DOM.create("<div id='TB_SRanking'><div class='TB_SRcontent'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tbody><tr><td>位置:</td><td>宝贝id（多个宝贝用“，”分割）:</td><td>页数始终：</td><td>&nbsp;</td></tr><tr><td><select name='select' id='select'><option value='0'>搜索列表（左侧）</option><option value='1'>直通车（右侧）</option><option value='2'>搜索列表+直通车</option></select></td><td><input type='text' name='textfield' id='textfield'></td><td><input name='textfield2' type='text' id='textfield2' value='1' size='10'>-<input name='textfield3' type='text' id='textfield3' autocomplete='off' value='10' size='10'></td><td><input type='button' name='button' id='button' value='开始搜索'></td></tr><tr><td colspan='4'><select name='select2' multiple id='select2'><option>1</option><option>2</option><option>3</option></select></td></tr></tbody></table></div></div>"), "body");
}
)();
