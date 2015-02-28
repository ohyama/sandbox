(function() {
  var a, b, l, m, n, score, signal;

  signal = "green";

  switch (signal) {
    case "red":
      console.long("STOP!");
      break;
    case "bule":
    case "green":
      console.log("GO!");
      break;
    case "yellow":
      console.log("CAUTION");
      break;
    default:
      console.log("Wrong Signal");
  }

  score = 82;

  if (score > 80) {
    console.log("score: " + (score * 10));
  }

  if (score > 60) {
    console.log(socre);
  }

  if (score > 60) {
    console.log(score);
  } else {
    console.log("ng");
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
