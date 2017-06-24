var renderArtistChart = function(chartObject, country) {
  var chartPage = document.querySelector("#charts");
  var olBody = document.createElement("ol");
  olBody.classList = country.country + "Chart";
  var title = document.createElement("h2");
  title.innerText = "Top 10 for " + country.countryName;
  olBody.appendChild(title);

  for (artist of chartObject.artist_list) {
    // console.log(artist);
    var artistListing = document.createElement("li");
    artistListing.innerText = artist.artist.artist_name;
    olBody.appendChild(artistListing);
  }
  chartPage.appendChild(olBody);
  return olBody;
};
