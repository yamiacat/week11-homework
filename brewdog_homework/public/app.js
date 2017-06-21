var app = function(){

  var url = "https://api.punkapi.com/v2/beers";

  var request = new XMLHttpRequest();
  request.open("GET", url);

  request.addEventListener("load", function() {
    var jsonString = request.responseText;
    var beers = JSON.parse(jsonString);

    console.log(beers);

    listAllBeerObjects(beers);
  });

  request.send();
}

var listAllBeerObjects = function(beers) {
  var mainPage = document.querySelector("#main");
  var beerList = document.createElement("ul");
  beerList.id = "beer-list";
  mainPage.appendChild(beerList);

  for(beer of beers) {
    displayBeer(beer);
  }
}

var displayBeer = function(beer) {
  var beerList = document.querySelector("#beer-list");
  var beerItem = document.createElement("li");
  beerItem.innerText = beer.name;
  beerList.appendChild(beerItem);

  var beerImg = document.createElement("img");
  beerImg.src = beer.image_url;
  beerImg.classList = "beer-image";
  beerList.appendChild(beerImg);
}

window.addEventListener('load', app);
