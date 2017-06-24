
var getArtistChart = function(country, map) {


var url = "https://api.musixmatch.com/ws/1.1/chart.artists.get?format=jsonp&callback=callback&country=" + country.country + "&apikey=";


var request = new XMLHttpRequest();
request.open("GET", url + apiKey);

request.setRequestHeader(
  "content-type", "text/plain; charset=utf-8"
);

request.addEventListener("load", function() {
//GRAB JSONP AND EXTRACT JSON
  var jsonpString = request.responseText;
  var re = /.*?(?={"artist_list)/;
  var jsonString = jsonpString.replace(re, "");
  var jsonStringTrimmed = jsonString.slice(0, -4);

//CREATE JSON OBJECTS
  var musicData = JSON.parse(jsonStringTrimmed);

  var artistChart = renderArtistChart(musicData, country);

  map.addInfoMarker(country.coords, artistChart);


  // return artistChart;

});

request.send();

}
