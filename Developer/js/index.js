$(function(){
	$(".oul>li").click(function(){
		$(this).addClass('cursor').siblings().removeClass('cursor');
		var $current = $(this).index();
		$(".innerWrap>div").eq($current).show().siblings().hide();
	})
	$(".all").show();
	$(".txt").hide();
	$(".img").hide();
	$(".vid").hide();
	//模板编译函数
	var $quanbu = _.template($("#template_1").html());
	var $wenzi = _.template($("#template_2").html());
	var $tupian = _.template($("#template_3").html());
	var $shipin = _.template($("#template_4").html());
	//发送ajax请求
	$.ajax({
		url:"https://www.apiopen.top/satinGodApi?type=1&page=1",
		dataType:"json",
		success:function(data){
			var dataArr = data.data;
			// console.log(dataArr);
			// 遍历data数组，数组中的每个元素都是字典
			for(var i =0;i < dataArr.length;i++){
				// console.log(dataArr[i]);
				//template模板的数据绑定，返回替换好的字符串
				var quanbuBind = $quanbu(dataArr[i]);
				var txtBind = $wenzi(dataArr[i]);
				var tupianBind = $tupian(dataArr[i]);
				var shipinBind = $shipin(dataArr[i]);
				//转为DOM元素
				var $quanbuDom = $(quanbuBind);
				var $txtDom = $(txtBind);
				var $tupianDom = $(tupianBind);
				var $shipinDom = $(shipinBind);
				//把获取到的数据添加到DOM元素
				$(".all").append($quanbuDom);
				$(".txt").append($txtDom);
				$(".img").append($tupianDom);
				$(".vid").append($shipinDom);
			}
		}
	})
})