var app = function(){

  var url = "https://api.punkapi.com/v2/beers";

  var request = new XMLHttpRequest();
  request.open("GET", url);

  request.addEventListener("load", function() {
    var jsonString = request.responseText;
    var beers = JSON.parse(jsonString);
  });

  request.send();
}

window.addEventListener('load', app);
