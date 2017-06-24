
var createInfoMap = function() {

  var container = document.querySelector("#main-map");
  var coords = {lat: 30, lng: 20}
  var zoom = 2

  var mainMap = new MapWrapper(container, coords, zoom);

  return mainMap;
}
