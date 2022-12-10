$("#login").click(function () {
  var loginGreet = G$("John", "Doe");

  $("#logindiv").hide();

  var inputLang = $("#lang").val();

  loginGreet.setLang(inputLang).renderGreeting("#greeting", true).log();
});
