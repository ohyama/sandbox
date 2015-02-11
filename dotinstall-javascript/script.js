var obj = {
	name : "ohyama",
	email : "ohyama@gmail",
	greet : function(name) {
		console.log("hello " + name + " from " + this.email);
	}
};

console.log(obj["name"]);
console.log(obj.name);
console.log(obj.greet("ohyama"));



var score = [100, 300, 500];
console.log(score[0]);

var m = [
	[1, 2, 3],
	[4, 5, 6]
];
console.log(m[1][1]);


var i = 0;
function show() {
	console.log(i++);
	var tid = setTimeout(function() {
		show();
	}, 1000);
	if (tid > 10) {
		clearTimeout(tid);
	}
}
show();
