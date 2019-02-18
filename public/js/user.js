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

  $(".close-button").on("click", function() {
    $("#modal2").hide();
    $("#modal3").hide();
    $("#modal1").show();
  });

  $(".login-form").on("submit", function(event) {
    event.preventDefault();
  });

  // var newUser;

  // $("#submit").on("click", function(event) {
  //   event.preventDefault();
  //   console.log("hello");

  //   newUser = {
  //     user_name: $("#sign-username")
  //       .val()
  //       .trim(),
  //     user_password: $("#sign-password")
  //       .val()
  //       .trim()
  //   };

  //   $.get("/api/users", function(data) {
  //     // if (!data.length) {
  //     //   createUser();
  //     // }

  //     for (var i = 0; i < data.length; i++) {
  //       if (
  //         newUser.user_name === data[i].name &&
  //         newUser.user_password === data[i].password
  //       ) {
  //         console.log("matched");
  //         window.location.href = "/user/" + data[i].id;
  //       }
  //     }

  //     createUser();
  //   });
  // });

  // function createUser() {
  //   $.ajax("/api/users", {
  //     type: "POST",
  //     data: newUser
  //   }).then(function() {
  //     console.log("user added");
  //   });
  // }
  $("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("hello");
    var newUser = {
      user_name: $("#sign-username")
        .val()
        .trim()
        .toString(),
      user_password: $("#sign-password")
        .val()
        .trim()
        .toString()
    };

    function createUser() {
      $.ajax("/api/users", {
        type: "POST",
        data: newUser
      }).then(function() {
        console.log("user added");
      });
    }

    $.get("/api/users", function(data) {
      var flag = true;
      for (var i = 0; i < data.length; i++) {
        if (
          newUser.user_name === data[i].name &&
          newUser.user_password === data[i].password
        ) {
          console.log("matched");
          // window.location.href = "/user/" + data[i];
          alert("User already exist!");
          location.reload();
          flag = false;
          break;
        }
      }
      console.log(flag);
      if (flag) {
        console.log("12");
        createUser();
        $("#modal3").hide();
        $("#modal2").show();
      }
    });
  });

  var currentUser;

  $("#login-submit").on("click", function() {
    $.get("/api/users", function(data) {
      var user = $("#login-username")
        .val()
        .trim();
      var password = $("#login-password")
        .val()
        .trim();
      for (var i = 0; i < data.length; i++) {
        if (user === data[i].name && password === data[i].password) {
          currentUser = data[i].id;
          window.location.href = "/user/" + currentUser;
          console.log("logged in as " + currentUser);
        } else {
          console.log("wrong login");
        }
      }

      sessionStorage.setItem("user-id", currentUser);
    });
  });

  //posting new post to api.
  $("#post-submit").on("click", function(event) {
    event.preventDefault();
    post();
    window.location.href = "/user/" + sessionStorage.getItem("user-id");
  });

  function post() {
    var newPost = {
      new_title: $("#new-title").val().trim(),
      new_body: $("#text-post").val().trim(),
      user_id: sessionStorage.getItem("user-id")
    };
    console.log(newPost);
    $.ajax("/api/posts", {
      type: "POST",
      data: newPost
    }).then(function() {
      console.log("post added");
    });
  }

  $("#table1 tr").on("click", function(event) {
    event.preventDefault();
    var postTitle = $(this).children()[1].innerHTML;
    window.location.href = "/post/" + postTitle;
  });
  $("#table2 tr").on("click", function(event) {
    event.preventDefault();
    // var postTitle = $(this).children()[0].innerHTML;
    // window.location.href = "/post/" + postTitle;
    // console.log($(this).children()[0].innerHTML);
    console.log("hello");
  });
  // function viewPost() {
  //   var chosenPost = {};
  //   $("#table1 tr").on("click", function() {
  //     chosenPost = {
  //       name: $(this).children()[0].innerHTML,
  //       title: $(this).children()[1].innerHTML,
  //       post: $(this).children()[2].innerHTML,
  //       date: $(this).children()[3].innerHTML
  //     };
  //     console.log("name", $(this).children()[0].innerHTML);
  //     console.log("title", $(this).children()[1].innerHTML);
  //     console.log("post", $(this).children()[2].innerHTML);
  //     console.log("date", $(this).children()[3].innerHTML);
  //     // console.log($(this).children()[1].html());
  //     // console.log($(this).children($(".name")).html());
  //     // console.log($(this).children($(".title")).html());
  //     $(".chosen-post").text(chosenPost.name);
  //     window.location.href = "/post"\
  //   });
  // }
  // viewPost();
});
