	//获取search参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = decodeURI(window.location.search.substr(1)).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
	}
// 遮罩层
// 登录验证
//