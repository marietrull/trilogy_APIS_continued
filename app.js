console.log("Javascript Connected");

  // Initial array of movies
  var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

  // Function for displaying movie data
  function renderMovies() {

    // Without this line of code, the entire array of movies will be added vs. just the new movie that the user enters
    $("#movies-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < movies.length; i++) {

      // Dynamicaly generating a new div for each movie in the array.
      var a = $("<div>");
      // Adding a class to the new div
      a.addClass("movie");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", movies[i]);
      // Providing the div's text with a value of the movie at index i
      a.text(movies[i]);
      // Adding the div to the HTML
      $("#movies-view").append(a);
    }
  }

  // This function handles events where one div is clicked
  $("#add-movie").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var movie = $("#movie-input").val().trim();
    // The movie from the textbox is then added to our array
    movies.push(movie);

    // calling renderButtons which handles the processing of our movie array
    renderMovies();
  });

  // Calling the renderButtons function at least once to display the initial list of movies
  renderMovies();