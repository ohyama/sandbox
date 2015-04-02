$(function(){

	var canvas = $('#myCanvas')[0];
	//var canvas = document.getElementById('myCanvas');
	if (!canvas || !canvas.getContext) return false;
	
	var ctx = canvas.getContext('2d');

	ctx.strokeStyle = "rgb(255, 0, 0)";
	ctx.lineWidth = 10;
	//ctx.lineJoin = "round";
	//ctx.lineJoin = "bevel";
	ctx.lineJoin = "miter";
	ctx.strokeRect(10, 10, 150, 50);

	ctx.fillStyle = "rgb(255, 0, 0)";
	ctx.fillRect(10, 10, 100, 100);
	ctx.clearRect(10, 10, 50, 50);
});
