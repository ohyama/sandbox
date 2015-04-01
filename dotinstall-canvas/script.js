$(function(){

	var canvas = $('#myCanvas')[0];
	//var canvas = document.getElementById('myCanvas');
	if (!canvas || !canvas.getContext) return false;
	
	var ctx = canvas.getContext('2d');
	ctx.strokeRect(10, 10, 150, 50);
	ctx.fillRect(10, 10, 100, 100);
	ctx.clearRect(10, 10, 50, 50);
});
