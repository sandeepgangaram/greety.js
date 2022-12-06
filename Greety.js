(function (global, $) {
  var Greety = function (firstName, lastName, language) {
    return new Greety.init(firstName, lastName, language);
  };

  Greety.prototype = {};

  Greety.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "es";
  };

  Greety.init.prototype = Greety.prototype;

  global.Greety = global.G$ = Greety;
})(window, jQuery);
