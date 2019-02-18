$(document).ready(function() {
  $("#modal1").show();
  console.log("hi");

  $("#login").on("click", function() {
    $("#modal1").hide();
    $("#modal2").show();
  });

  $("#sign-up").on("click", function() {
    $("#modal1").hide();
    $("#modal3").show();
  });

  $("#close-button").on("click", function() {
    $("#modal2").hide();
    $("#modal3").hide();
  });

  $(".login-form").on("submit", function(event) {
    event.preventDefault();
  });

  $("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("hello");

    var newUser = {
      user_name: $("#sign-username")
        .val()
        .trim(),
      user_password: $("#sign-password")
        .val()
        .trim()
    };

    $.ajax("/api/users", {
      type: "POST",
      data: newUser
    }).then(function() {
      console.log("user added");
    });
    // $.post("/api/users", newUser, function() {
    //   window.location.href = "/index";
    // });
  });
});
