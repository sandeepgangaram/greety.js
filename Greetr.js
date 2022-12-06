(function (global, $) {
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  Greetr.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "es";
  };
})(window, jQuery);
