$(function(){
	//获取search参数
	function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = decodeURI(window.location.search.substr(1)).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
	}	
		var mySwiper=new Swiper(".swiper-container",{
				autoplay:true,
				pagination:{
					el:".swiper-pagination"
				},
				observer:true,//修改swiper自己或子元素时，自动初始化swiper 
				observeParents:false,//修改swiper的父元素时，自动初始化swiper 
				loop:true
			})
	

	//导航的切换
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		console.log(top)
		if(top>150){
			$(".nav").css({
				"background":"rgba(255,255,255,1)"
			})
			$(".nav ul").show();
			$(".nav i").css({
				"background":"white",
				"color":"#999"
			})
		}else{
			$(".nav").css({
				"background":"rgba(255,255,255,0)"
			})
			$(".nav ul").hide();
			$(".nav i").css({
				"background":"rgba(0,0,0,0.5)",
				"color":"white"
			})
		}
	})
	//接受id  通过id 请求后台数据  渲染商品
		var goods_id=GetQueryString("pid");
		$.ajax({
			url:"https://api.ymduo.com/item/index",
			type:"post",
			dataType:"json",
			data:{
				gid:goods_id
			},
			success:function(res){
				console.log(res);
				//渲染轮播图
				var bannerArr=res.result.data.image;
				var bannerStr="";
				$.each(bannerArr,function(index,ele){
					bannerStr+=	'<div class="swiper-slide">'
							+'<img src="'+ele+'"/>'
						+'</div>'
					})
					$(".swiper-wrapper").html(bannerStr);
				//价格
				$(".price").html(res.result.data.price)
				//原价
				$(".old_price").html(res.result.data.old_price);
				//名称
				$(".pname").html(res.result.data.goods_name)
				//月销量
				$(".count span").eq(1).html("月销量："+res.result.data.monthly);
				
			}
			
			
		})
		
	$(".turn").click(function(){
		location.href="../index.html";
	})
	
})
	
