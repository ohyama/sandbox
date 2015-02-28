(function() {
  var AdminUser, User, nakayama, ohyama, rs, x,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  User = (function() {
    function User(name) {
      this.name = name;
    }

    User.prototype.hello = function() {
      return console.log("helle " + this.name);
    };

    return User;

  })();

  AdminUser = (function(superClass) {
    extend(AdminUser, superClass);

    function AdminUser() {
      return AdminUser.__super__.constructor.apply(this, arguments);
    }

    AdminUser.prototype.hello = function() {
      console.log("Admin says...");
      return AdminUser.__super__.hello.call(this);
    };

    return AdminUser;

  })(User);

  ohyama = new User("Ohyama");

  ohyama.hello();

  nakayama = new AdminUser("Nakayama");

  nakayama.hello();

  x = 20;

  rs = x != null ? "found" : "not found";

  console.log(rs);

}).call(this);
