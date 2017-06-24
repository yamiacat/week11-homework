
var createInfoMap = function(countries) {

  var container = document.querySelector("#main-map");
  var coords = {lat: 0, lng: 0}
  var zoom = 1

  var mainMap = new MapWrapper(container, coords, zoom);

  return mainMap;
}
