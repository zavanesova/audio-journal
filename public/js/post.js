// $(document).ready(function() {
//     $("#submit").on("click", function(event) {
//       event.preventDefault();
//       if (
//         !$("#title")
//           .val()
//           .trim() ||
//         !$("#body")
//           .val()
//           .trim()
//       ) {
//         console.log("The form is didn't fill right");
//         return;
//       }
  
//       var newPost = {
//         new_title: $("#title")
//           .val()
//           .trim(),
//         new_body: $("#body")
//           .val()
//           .trim()
//       };
  
//       // Sets a flag for whether or not we're updating a post to be false initially
//       $.ajax("/api/posts", {
//         type: "POST",
//         data: newPost
//       }).then(function() {
//         console.log("post added");
//         // window.location
//       });
//     });
  
//     $("#update").on("click", function(event) {
//       event.preventDefault();
//       var id = $(this).data("id");
//       $.ajax({
//         method: "PUT",
//         url: "/api/posts/" + id,
//         data: newPost
//       }).then(function() {
//         // window.location.href = "/blog";
//         location.reload();
//       });
//     });
  
//     $("delete").on("click", function(event) {
//       event.preventDefault();
  
//       var id = $(this).data("id");
  
//       $.ajax({
//         method: "DELETE",
//         url: "/api/posts/" + id
//       }).then(function() {
//         console.log("Your post with an ID: " + id + "has been deleted.");
//       });
//     });
//   });