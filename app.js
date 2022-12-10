// usage examples

// gets a new object (the architecture allows us to not
// have to use the 'new' keyword here)
var a = G$("Bob", "Marley");

// using chainable methods
a.greet().setLang("es").greet(true).log();

// usage of returned object on the click of the login button
$("#login").click(function () {
  // create a new 'Greety' object
  // (let's pretend we know the name from the login)
  // ideally should come from UI/Server
  var loginGreet = G$("John", "Doe");

  // hide selector UI/login on the screen
  $("#logindiv").hide();

  // get input language using jQuery
  var inputLang = $("#lang").val();

  // set language to the current object grabbed from UI
  // render greeting message by selecting DOM node by passing '#greeting' selector
  // log it to console as well
  loginGreet.setLang(inputLang).renderGreeting("#greeting", true).log();
});
