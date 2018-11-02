console.log("Javascript Connected");

  // Initial array of movies
  var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

  // -------DISPLAY MOVIE FUNCTION-------//
  function renderMovies() {

    // Without this line of code, the entire array of movies will be added vs. just the new movie that the user enters
    $("#movies-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < movies.length; i++) {

      // Dynamicaly generating a new div for each movie in the array.\
      var a = $("<button>");
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

  //--------ADD MOVIE FUNCTION--------//
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

//-----AJAX CALL FOR MOVIE DATA-----//
    function displayMovieInfo() {
   	$("#movies-view").empty();

    var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Creating a div to hold the movie
      var movieDiv = $("<div class='movie'>");

      // Storing the rating data
      var rating = response.Rated;

      // Creating an element to have the rating displayed
      var pOne = $("<p>").text("Rating: " + rating);

      // Displaying the rating
      movieDiv.append(pOne);

      // Storing the release year
      var released = response.Released;

      // Creating an element to hold the release year
      var pTwo = $("<p>").text("Released: " + released);

      // Displaying the release year
      movieDiv.append(pTwo);

      // Storing the plot
      var plot = response.Plot;

      // Creating an element to hold the plot
      var pThree = $("<p>").text("Plot: " + plot);

      // Appending the plot
      movieDiv.append(pThree);

      // Retrieving the URL for the image
      var imgURL = response.Poster;

      // Creating an element to hold the image
      var image = $("<img>").attr("src", imgURL);

      // Appending the image
      movieDiv.append(image);

      // Putting the entire movie above the previous movies
      $("#movies-view").prepend(movieDiv);
    });
}

//Display movie data on click
$(document).on("click", ".movie", displayMovieInfo);

// Calling the renderButtons function at least once to display the initial list of movies
renderMovies();