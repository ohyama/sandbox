(function() {
  var a, b, c, color, email, hello, i, j, len, msg, name, ref, ref1, results, score, sum, total, user;

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

  results = function(x) {
    return [x, Math.pow(x, 2), Math.pow(x, 3)];
  };

  ref1 = results(5), a = ref1[0], b = ref1[1], c = ref1[2];

  console.log(a);

  console.log(b);

  console.log(c);

  user = {
    name: "ohyama",
    score: 50,
    email: "hoge@hoge.com"
  };

  name = user.name, email = user.email;

  console.log(name);

  console.log(email);

}).call(this);
