(function() {
  var color, hello, i, j, len, msg, name, ref, results, score, sum, total;

  sum = 0;

  total = (function() {
    var j, results1;
    results1 = [];
    for (i = j = 0; j <= 9; i = j += 2) {
      results1.push(sum += i);
    }
    return results1;
  })();

  console.log(total);

  ref = ["red", "blue", "pink"];
  for (i = j = 0, len = ref.length; j < len; i = ++j) {
    color = ref[i];
    if (color !== "blue") {
      console.log(color + ":" + i);
    }
  }

  results = {
    ohyama: 40,
    nakayama: 30,
    koyama: 50
  };

  for (name in results) {
    score = results[name];
    console.log(name + ":" + score);
  }

  hello = function(name) {
    if (name == null) {
      name = "ohyama";
    }
    return "hello " + name;
  };

  msg = hello("nakayama");

  console.log(msg);

  (function() {
    return console.log("do!!!!");
  })();

}).call(this);
