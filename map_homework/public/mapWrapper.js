
var MapWrapper = function(container, coords, zoom) {

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });

  }





  MapWrapper.prototype = {

    addInfoMarker: function(coords, infoContent) {
      var marker = new google.maps.Marker({
        position: coords,
        map: this.googleMap,
        title: "Trinity"
      });
      var infowindow = new google.maps.InfoWindow({
        content: infoContent,
        maxWidth: 200
      });
      marker.addListener('click', function() {
        infowindow.open(this.googleMap, marker);
      });
    },
    motate: function(destination) {
        this.googleMap.setCenter(destination);
    }
  }
