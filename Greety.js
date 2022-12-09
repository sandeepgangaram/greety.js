(function (global, $) {
  var Greety = function (firstName, lastName, language) {
    return new Greety.init(firstName, lastName, language);
  };

  var supportedLanguages = ["en", "es"];

  var greetings = {
    en: "Hello",
    es: "Hola",
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };

  var logMessages = {
    en: "Logged In",
    es: "Inció sesión",
  };

  Greety.prototype = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },

    validateLang: function () {
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw "Language not supported";
      }
    },
  };

  Greety.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "es";
  };

  Greety.init.prototype = Greety.prototype;

  global.Greety = global.G$ = Greety;
})(window, jQuery);
