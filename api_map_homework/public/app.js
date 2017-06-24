
var initialize = function() {

  var countries = [
    { country: "AU", countryName: "Australia", coords: {lat: -25.274398,	lng: 133.775136}},
    { country: "CA", countryName: "Canada", coords: {lat: 56.130366,	lng: -106.346771}},
    { country: "DE", countryName: "Germany", coords: {lat: 51.165691,	lng: 10.451526}},
    { country: "ES", countryName: "Spain", coords: {lat: 40.463667,	lng: -3.74922}},
    { country: "FI", countryName: "Finland", coords: {lat: 61.92411,	lng: 25.748151}},
    { country: "IT", countryName: "Italy", coords: {lat: 41.87194,	lng: 12.56738}},
    { country: "GB", countryName: "Britain", coords: {lat: 55.378051,	lng: -3.435973}},
    { country: "GR", countryName: "Greece", coords: {lat: 39.074208,	lng: 21.824312}},
    { country: "NL", countryName: "Netherlands", coords: {lat: 52.132633,	lng: 5.291266}},
    { country: "PT", countryName: "Portugal", coords: {lat: 39.399872,	lng: -8.224454}},
    { country: "US", countryName: "USA", coords: {lat: 37.09024,	lng: -95.712891}},
  ];

  var map = createInfoMap(countries);

  for(country of countries) {

    getArtistChart(country, map);

  }




}




window.addEventListener("load", initialize);
