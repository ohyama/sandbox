
/*
var score = 82;
if (score > 80) {
	alert("OK");	
}
 */

(function() {
  var a, b, m, n, score;

  score = 82;

  if (score > 80) {
    console.log("score: " + (score * 10));
  }

  a = [1, 3, 5];

  b = [1, 2, 3];

  m = [0, 1, 2, 3, 4, 5];

  n = [0, 1, 2, 3, 4];

  console.log(m.slice(1, 4));

  console.log("world".slice(1, 4));

}).call(this);
