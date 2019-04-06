window.onload=function(){

		//把案例、小圆点、图片都存入变量
		var $leftBtn = $("#leftBtn");
		var $rightBtn = $("#rightBtn");
		var $circlesLis = $("#circles ol li");
		var $imagesLis = $("#imagesList ul li");
		var $carousel = $("#carousel");

		//定时器
		var timer = setInterval(rightBtnHandler,3000);
		//鼠标进入，关闭定时器
		$carousel.mouseenter(function(){
			clearInterval(timer);
		});
		//鼠标离开，恢复定时器
		$carousel.mouseleave(function(){
			clearInterval(timer);
			timer = setInterval(rightBtnHandler,3000);
		});

		// 信号量
		var idx = 0;
		// 右边按钮的监听
		$rightBtn.click(rightBtnHandler);
		// 右按钮的事件处理函数
		function rightBtnHandler(){
			//如果当前图片正在运动，就如同没有点击一样
			if($imagesLis.is(":animated")){
				return;
			}

			//当前图片淡出
			$imagesLis.eq(idx).fadeOut(400,function(){
				//信号量改变
				idx++;
				if(idx > $circlesLis.length - 1){
					idx = 0;
				}
				//新图片淡入
				$imagesLis.eq(idx).fadeIn(400);
				//小圆点
				$circlesLis.eq(idx).addClass("cur").siblings().removeClass("cur");
			});

		}

		// 左边按钮的监听
		$leftBtn.click(function(){
			//如果当前图片正在运动，就如同没有点击一样
			if($imagesLis.is(":animated")){
				return;
			}
			
			//当前图片淡出
			$imagesLis.eq(idx).fadeOut(400,function(){
				//信号量改变
				idx--;
				if(idx < 0){
					idx =  $circlesLis.length - 1;
				}
				//新图片淡入
				$imagesLis.eq(idx).fadeIn(400);
				//小圆点
				$circlesLis.eq(idx).addClass("cur").siblings().removeClass("cur");
			});
			
		});

		//小圆点
		$circlesLis.mouseenter(function(){
			//当前图片淡出
			$imagesLis.eq(idx).stop(true).fadeOut(400);
			//信号量改变
			idx = $(this).index();
			//新图片淡入
			$imagesLis.eq(idx).stop(true).fadeIn(400);
			//自己有cur，其他人没有cur
			$(this).addClass("cur").siblings().removeClass("cur");
		});

}