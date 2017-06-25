var renderArtistChart = function(chartObject, country) {

  //CREATE ARTISTCHART ELEMENT
  var olBody = document.createElement("ol");
  olBody.classList = country.country + "Chart";
  var title = document.createElement("h2");
  title.innerText = "Top 10 for " + country.countryName;
  olBody.appendChild(title);


  var artistGenreCount = {};
  var genreArray = [];

  for(var i = 0; i< chartObject.artist_list.length; i++) {
    //POPULATE CHART WITH ARTIST LIST
    var artistListing = document.createElement("li");
    artistListing.innerText = chartObject.artist_list[i].artist.artist_name;

    //BUTTON FOR ALBUMS
    var albumButton = document.createElement("button");
    albumButton.innerText = "Ugh";
    albumButton.value = chartObject.artist_list[i].artist.artist_id;
    albumButton.addEventListener("click", function() {
      getArtistAlbums(this.value);
    })
    artistListing.appendChild(albumButton);
    olBody.appendChild(artistListing);

    //RECORD NUMBER OF INSTANCES OF EACH GENRE
    if(chartObject.artist_list[i].artist.primary_genres.music_genre_list.length > 0) {
      var genre = chartObject.artist_list[i].artist.primary_genres.music_genre_list[0].music_genre.music_genre_name;
    } else {
      var genre = "Pop";
    }
    artistGenreCount[genre] = artistGenreCount[genre] ? artistGenreCount[genre]+1 : 1;
  }

  //CLEANSE GENRE COUNT TO PIECHART FORMAT

  var cleansedGenreData = [];

  for(genre in artistGenreCount) {
    var dataObject = {}
    dataObject.name = genre;
    dataObject.y = artistGenreCount[genre];

    cleansedGenreData.push(dataObject);
  }

  //CREATE PIECHART
  var pieChartButton = document.createElement("button");
  pieChartButton.innerText = "Genre Breakdown";
  pieChartButton.addEventListener("click", function() {
    createPieChart(chartObject, country, cleansedGenreData)
  });

  var createPieChart = function(chartObject, country, cleansedGenreData) {

    new PieChart("Genre Breakdown of " + country.countryName, "Awful Artists", cleansedGenreData);
  }

  olBody.appendChild(pieChartButton);



  return olBody;
};
