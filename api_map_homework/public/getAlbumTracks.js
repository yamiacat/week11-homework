var getAlbumTracks = function(albumID) {

console.log("getAlbumTracks Clicked", albumID);

var url = "https://api.musixmatch.com/ws/1.1/album.tracks.get?format=jsonp&callback=callback&album_id=" + albumID + "&page=1&page_size=100&apikey=";


var request = new XMLHttpRequest();
request.open("GET", url + apiKey);

request.setRequestHeader(
  "content-type", "text/plain; charset=utf-8"
);

request.addEventListener("load", function() {
//GRAB JSONP AND EXTRACT JSON
  var jsonpString = request.responseText;
  var re = /.*?(?={"track_list)/;
  var jsonString = jsonpString.replace(re, "");
  var jsonStringTrimmed = jsonString.slice(0, -4);
  // console.log("jsonString", jsonString);

//CREATE JSON OBJECTS
  var trackData = JSON.parse(jsonStringTrimmed);

  renderAlbumTracks(trackData, albumID);


});

request.send();

}
