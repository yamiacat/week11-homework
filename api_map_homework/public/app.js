
var initialize = function() {

  var map = createInfoMap();


  for(country of countries) {
    getArtistChart(country, map);
  }

  map.bounceMarkers();



}




window.addEventListener("load", initialize);
