
/*
var score = 82;
if (score > 80) {
	alert("OK");	
}
 */

(function() {
  var a, b, l, m, n, score;

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

  m = {
    name: "ohyama",
    score: 80
  };

  n = {
    name: "ohyama",
    score: 90
  };

  l = {
    name: "ohyama",
    score: {
      a: 10,
      b: 10,
      c: 20
    }
  };

  console.log(m);

  console.log(n);

  console.log(l);

}).call(this);
