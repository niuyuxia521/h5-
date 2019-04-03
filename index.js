window.onload=function(){
 
 var slideImg = document.getElementById('slideImg').getElementsByTagName('li');
 var buttons = document.getElementById('buttons').getElementsByTagName('span');
 var Img = document.getElementById('slideImg');
 var prev = document.getElementById('prev');
 var next = document.getElementById('next');
 var index = 0;
 var timer = null;
//左按钮
prev.onclick =function(){
			index --;
			if (index < 0) {
				index = 2
					}
				change(index)
			}
//右按钮
			next.onclick = function(){
				index++;
			if (index>2) {
			index = 0;
		}
			change(index);
	}
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].num = i;//保留小标
			buttons[i].onclick = function(){
			index = this.num;
			change(index)
		}
			}
		function change(index){
				for (var j = 0; j < buttons.length; j++) {
					//默认显示
				buttons[j].className = '';
				slideImg[j].className = 'opacityon';
					}
				    buttons[index].className = 'red';
					slideImg[index].className = 'opacityoff';
				}
		function play(){
				timer = window.setInterval(next.onclick,2000);
		}
			play()
		function stop(){
				window.clearInterval(timer);
			}
		Img.onmouseover = function(){
				stop()
			}
		Img.onmouseout = function(){
				play()
	}
}