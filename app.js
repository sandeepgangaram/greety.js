const a = G$("John", "Doe");
// console.log(a);
a.greet().greet(true).setLang("es").greet().log();
// a.greet().greet(true).setLang("en").greet().renderGreeting("#greeting");
// a.greet().greet(true).setLang("er").greet();
$("#login").click(function () {
  var loginGreet = G$("John", "Doe");

  $("#logindiv").hide();

  var inputLang = $("#lang").val();

  loginGreet.setLang(inputLang).renderGreeting("#greeting", true).log();
});
