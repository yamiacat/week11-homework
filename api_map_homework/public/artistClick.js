var getArtistAlbums = function(artistID) {

console.log("getArtistAlbums Clicked", artistID);

var url = "https://api.musixmatch.com/ws/1.1/artist.albums.get?format=jsonp&callback=callback&page_size=100&artist_id=" + artistID + "&s_release_date=desc&g_album_name=1&apikey=";


var request = new XMLHttpRequest();
request.open("GET", url + apiKey);

request.setRequestHeader(
  "content-type", "text/plain; charset=utf-8"
);

request.addEventListener("load", function() {
//GRAB JSONP AND EXTRACT JSON
  var jsonpString = request.responseText;
  var re = /.*?(?={"album_list)/;
  var jsonString = jsonpString.replace(re, "");
  var jsonStringTrimmed = jsonString.slice(0, -4);
  // console.log("jsonString", jsonString);

//CREATE JSON OBJECTS
  var albumData = JSON.parse(jsonStringTrimmed);

  renderArtistReleases(albumData);


});

request.send();

}
