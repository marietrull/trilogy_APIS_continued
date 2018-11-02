console.log("Javascript Connected");

  // Initial array of movies
  var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

  // Function for displaying movie data
  function renderMovies() {

    // Without this line of code, the entire array of movies will be added vs. just the new movie that the user enters
    $("#movies-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < movies.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var a = $("<div>");
      // Adding a class
      a.addClass("movie");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", movies[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(movies[i]);
      // Adding the button to the HTML
      $("#movies-view").append(a);
    }
  }

  // Calling the renderButtons function at least once to display the initial list of movies
  renderMovies();