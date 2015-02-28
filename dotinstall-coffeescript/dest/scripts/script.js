(function() {
  var User, ohyama;

  User = (function() {
    function User(name) {
      this.name = name;
    }

    User.prototype.hello = function() {
      return console.log("helle " + this.name);
    };

    return User;

  })();

  ohyama = new User("Ohyama");

  ohyama.hello();

}).call(this);
