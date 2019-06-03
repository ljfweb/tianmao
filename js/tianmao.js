$(function(){
	//轮播图
	var Myswiper=new Swiper(".swiper-container",{
		autoplay:true,
		pagination:{
			el:".swiper-pagination",
			clickable:true
		}
	})
	//控制样式切换 控制  .list_flex  .pro_flex 切换
	
		$(".fenlei").click(function(){
			$(".pro_list").toggleClass("list_flex");
			$(".product_one").toggleClass("pro_flex");
		})
		//获取列表数据
	$.ajax({
		url:"https://api.ymduo.com/Interface/recommendlists",
		type:"post",
		dataType:"json",
		data:{
			pf: 1,
			p: 1
		},
		success:function(res){
			console.log(res);
			var arr=res.result.data;
			var str='';
			$.each(arr,function(index,ele){
				str+='<div  pid="'+ele.goods_id+'" class="product_one pro_flex">'
					+'<div class="pro_img">'
						+'<img src="'+ele.image+'"/>'
					+'</div>'
					+'<div class="pro_info">'
					+'	<div class="pname">'
							+ele.goods_name
						+'</div>'
						+'<p class="price">￥ '+ele.price+'</p>'
						+'<div class="count">月销量 <span>'+ele.pay_num+'</span>笔 <span>免运费</span></div>'
					+'</div>'
				+'</div>'
				
			})
			$(".pro_list").html(str);
			//点击跳转详情页
			$(".product_one").click(function(){
				//跳转页面  用search 传送id
				location.href="htmls/info.html?pid="+$(this).attr("pid");
				
			})
		}
		
	})
		
	
})

