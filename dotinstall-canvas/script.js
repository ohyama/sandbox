$(function(){

	var canvas = document.getElementById('myCanvas');
	if (!canvas || !canvas.getContext) return false;
	
	var ctx = canvas.getContext('2s');
	ctx.strokeRect(10, 10, 50, 50);
});
