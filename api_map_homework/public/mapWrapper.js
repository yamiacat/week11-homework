
var MapWrapper = function(container, coords, zoom) {

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = []
  // this.bounceMarkers = this.bounceMarkers.bind(this)
  this.addInfoMarker = this.addInfoMarker.bind(this)
  }


  MapWrapper.prototype = {

    addInfoMarker: function(coords, infoContent) {
      var marker = new google.maps.Marker({
        position: coords,
        map: this.googleMap
      });
      this.markers.push(marker)
      var infowindow = new google.maps.InfoWindow({
        content: infoContent,
        maxWidth: 300
      });
      marker.addListener('click', function() {
      infowindow.open(this.googleMap, marker);
    })
    return infowindow;
  },
    // bounceMarkers: function(){
    //   this.markers.forEach(function(marker) {
    //     marker.setAnimation(google.maps.Animation.BOUNCE)
    //   })
    // }
  }
