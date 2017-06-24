
var createInfoMap = function(countries) {

  var container = document.querySelector("#main-map");
  var coords = {lat: 0, lng: 0}
  var zoom = 1

  var mainMap = new MapWrapper(container, coords, zoom);

  return mainMap;

  map.addInfoMarker(coords, infoContent1);



}



// var populateInfoBox = function(map) {
//   var infoContent1 = getArtistChart("US");
//   infoContent1.addEventListener("load", function() {
//
//     console.log("infoContent", infoContent1);
//
//   })
//
// }
//
//
// var createInfoBox = function(map) {
//   var coords = {lat: 0, lng: 0}
//   map.addInfoMarker(coords, infoContent1);
//
// }

// window.addEventListener("load", populateInfoBox);
