//		1rem=50px 真实设备
//		1rem=100px设计图
		function rem (doc, win) {  
			  let docEl = doc.documentElement; //html 考虑以及兼容了 屏幕旋转的事件
			  //判断事件orientationchange 横屏 事件  或resize 
			  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';  	  
			  		let recalc = function () {         
			  			var clientWidth = docEl.clientWidth;   //获取屏幕大小
			  			if (!clientWidth){ return };   //未获取屏幕尺寸        
			  			//屏幕大于750
			  			if (clientWidth >= 750) {
			                 docEl.style.fontSize = '100px';
			            } else {
//			            	html的font-size         100* 设备宽度 / 750
			                 docEl.style.fontSize = 100*(clientWidth /750)+ 'px';
			            }
			      };   
			      if (!doc.addEventListener) {return ;}//addEventListener 兼容判断
  
			    win.addEventListener(resizeEvt, recalc, false);               // 屏幕大小以及旋转变化自适应
			    doc.addEventListener('DOMContentLoaded', recalc, false);     // 页面初次打开自适应
			    recalc();
			}
			
				rem(document,window);
		
		