
var initialize = function() {

  var map = createInfoMap();


  for(country of countries) {
    getArtistChart(country, map);
  }

}




window.addEventListener("load", initialize);
