var getLyrics = function(trackID) {

console.log("getLyrics Clicked", trackID);

"74138124&apikey="

var url = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsonp&callback=callback&track_id=" + trackID + "&apikey=";


var request = new XMLHttpRequest();
request.open("GET", url + apiKey);

request.setRequestHeader(
  "content-type", "text/plain; charset=utf-8"
);

request.addEventListener("load", function() {
//GRAB JSONP AND EXTRACT JSON
  var jsonpString = request.responseText;
  var re = /.*?(?={"lyrics)/;
  var jsonString = jsonpString.replace(re, "");
  var jsonStringTrimmed = jsonString.slice(0, -4);

//CREATE JSON OBJECTS
  var lyricsData = JSON.parse(jsonStringTrimmed);
  console.log(lyricsData);
  renderLyrics(lyricsData, trackID);


});

request.send();

}
