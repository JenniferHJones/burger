$(function() {  

    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
    $(".eatBurger").on("click", function(event) {
      var id = $(this).data("id");
      var nowDevoured = {devoured: true};
  
      // Send the PUT request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: nowDevoured
      }).then(
        function() {
          console.log("You ate the burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  