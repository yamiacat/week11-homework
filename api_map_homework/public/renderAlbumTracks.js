var renderAlbumTracks = function(trackData, albumID) {
console.log("trackData", trackData);
console.log("albumID", albumID);

  // var idTag = "#" + albumID
  var albumEntry = document.getElementById(albumID);
  console.log("albumEntry",albumEntry);
  var trackList = document.createElement("ol");

  for(track of trackData.track_list) {
    var trackItem = document.createElement("li");
    trackItem.id = track.track.track_id;
    trackItem.innerText = track.track.track_name;
    if(1 === track.track.has_lyrics) {
      var lyricsButton = document.createElement("button");
      lyricsButton.innerText = "STAAAHP!";
      lyricsButton.value = track.track.track_id;
      lyricsButton.addEventListener("click", function() {
        getLyrics(this.value);
      });
      trackItem.appendChild(lyricsButton);
    }
    trackList.appendChild(trackItem);
  }

  albumEntry.appendChild(trackList);
}
