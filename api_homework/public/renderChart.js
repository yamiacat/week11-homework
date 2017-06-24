var renderArtistChart = function(chartObject, destination) {

console.log("in render method", chartObject);

  var olBody = document.createElement("ol");


  for (artist of chartObject.artist_list) {
    console.log(artist);
    var artistListing = document.createElement("li");
    artistListing.innerText = artist.artist.artist_name;
    olBody.appendChild(artistListing);
  }

  destination.appendChild(olBody)
};
