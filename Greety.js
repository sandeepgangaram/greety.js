(function (global, $) {
  // initialize an object
  var Greety = function (firstName, lastName, language) {
    return new Greety.init(firstName, lastName, language);
  };

  // scoped within IIFE
  var supportedLanguages = ["en", "es"];

  // informal greetings
  var greetings = {
    en: "Hello",
    es: "Hola",
  };

  // formal greetings
  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };

  // logger messages
  var logMessages = {
    en: "Logged In",
    es: "Inció sesión",
  };

  // methods inside prototype (saves memory space)
  Greety.prototype = {
    // 'this' refers to the calling object at execution time
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },

    //check that input is a valid language
    validateLang: function () {
      //references the externally inaccessible 'supportedLanguages'
      //within the closure
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw "Language not supported";
      }
    },

    //retrieve messages from greetings object accessible whithin closure
    greeting: function () {
      return greetings[this.language] + " " + this.firstName;
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ", " + this.fullName();
    },

    // chainable methods
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

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ":" + this.fullName());
      }

      return this;
    },

    setLang: function (lang) {
      //validate input language
      this.validateLang.call({ language: lang });

      //set the language
      this.language = lang;

      return this;
    },

    renderGreeting: function (selector, formal) {
      if (!$) {
        throw "jQuery Not Loaded";
      }

      if (!selector) {
        throw "Missing Selector";
      }

      //compute message
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      //check selected element
      //if element exists
      //inject the message into DOM
      var element = $(selector);
      if (element) {
        $(selector).html(msg);
      }

      return this;
    },
  };

  // the actual object is created here, allowing us to 'new'
  // an object wihtout calling 'new'
  Greety.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "es";
  };

  // trick borrowed from jQuery so that we don't have to use the new keyword
  Greety.init.prototype = Greety.prototype;

  // attach Greety to the global object
  // provide shorthand '$G' for ease of use
  global.Greety = global.G$ = Greety;
})(window, jQuery);
