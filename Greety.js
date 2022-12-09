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

    greeting: function () {
      return greetings[this.language] + " " + this.firstName;
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ", " + this.fullName();
    },

    greet: function (formal) {
      var msg;
      //if undefined or null formal will be coerced to false
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      //check if console object exists on window
      //Ex:- IE has console only when console is open
      if (console) {
        console.log(msg);
      }

      //'this' refers to the calling object at execution time
      // this (pun intended) makes the method chainable
      return this;
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
