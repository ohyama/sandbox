$(function(){

	var canvas = $('#myCanvas')[0];
	//var canvas = document.getElementById('myCanvas');
	if (!canvas || !canvas.getContext) return false;
	
	var ctx = canvas.getContext('2d');

	var img = new Image();
	img.src = 'https://pbs.twimg.com/profile_images/378800000220029324/fe66faeca20115da8566e51d83447ead_400x400.jpeg';
	img.onload = function () {
		var pattern = ctx.createPattern(img, 'repeat'); // no-repeat, repeat-x, repeat-y
		ctx.fillStyle = pattern;
		ctx.fillRect(300, 300, 300, 300);
		ctx.drawImage(img, 500, 200);
	};

	ctx.font = 'bold 20px Verdana';
	ctx.textAlign = 'left'; // right, center, start, end
	ctx.fillStyle = 'red';
	ctx.fillText('OHYAMA', 400, 20, 200);
	ctx.strokeStyle = 'pink';
	ctx.strokeText('OHYAMA', 400, 40);


	ctx.beginPath();
	ctx.arc(300, 300, 50, 10/180*Math.PI, 210/180*Math.PI);
	ctx.lineWidth = 10;
	ctx.lineCap = "square"; // round, butt, square 
	//ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(200, 200);
	ctx.lineTo(320, 200);
	ctx.lineTo(320, 320);
	ctx.closePath();
	ctx.fill();
	//ctx.stroke();

	ctx.strokeStyle = "rgb(255, 0, 0)";
	ctx.lineWidth = 10;
	//ctx.lineJoin = "round";
	//ctx.lineJoin = "bevel";
	ctx.lineJoin = "miter";
	ctx.strokeRect(200, 10, 150, 50);

	ctx.fillStyle = "rgb(255, 0, 0)";
	//var g = ctx.createLinearGradient(0,0,100,100);
	var g = ctx.createRadialGradient(50,50,30,50,50,60);
	g.addColorStop(0.0, "red");
	g.addColorStop(0.5, "yellow");
	g.addColorStop(1.0, "blue");
	ctx.fillStyle = g;
	ctx.fillRect(10, 10, 100, 100);
	ctx.clearRect(10, 10, 50, 50);

	ctx.fillStyle = "#000";
	ctx.shadowColor = "#ccc";
	ctx.shadowOffsetX = 5;
	ctx.shadowOffsetY = 5;
	ctx.shadowBlur = 2;

	ctx.globalAlpha = 0.5;
	
	ctx.scale(0.8, 0.8);
	ctx.rotate(30/180*Math.PI);
	ctx.translate(100, 10);
	ctx.fillRect(100, 100, 100, 100);
});
