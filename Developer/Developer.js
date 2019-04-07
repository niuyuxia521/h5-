window.onload = function(){
	var inner = document.getElementById('inner');
	var aDiv = document.getElementsByClassName('view');
	var tit = document.getElementById('tit');
	var aLi = tit.getElementsByTagName('li');
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onclick = function(){
			for (var j = 0; j < aLi.length; j++) {
				aLi[j].className = '';
			}
			this.className = 'current';
			for (var k = 0; k < aDiv.length; k++) {
				aDiv[k].style.display = 'none';
			}
			aDiv[this.index].style.display = 'block';
		} 
	}
}