

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
  var beerName = document.createElement("h2")
  beerName.innerText = beer.name;
  beerItem.appendChild(beerName);
  beerList.appendChild(beerItem);

//List unique hops

  var hops = document.createElement("p");
  var hopsArray = beer.ingredients.hops;
  var hopsNameArray = [];

  for(hop of hopsArray) {
    hopsNameArray.push(hop.name);
  }
  var uniqHops = hopsNameArray.filter(function (value, index, self) {
      return self.indexOf(value) === index;
  });

  var hopsString = "Hops ";

  for(hop of uniqHops) {
    hopsString += " - " + hop;
  }
  hops.innerText = hopsString;
  beerItem.appendChild(hops);

//List malts

var malts = document.createElement("p");
var maltArray = beer.ingredients.malt;
var maltString = "Malts ";

for(malt of maltArray) {
  maltString += " - " + malt.name;
}

malts.innerText = maltString;
beerItem.appendChild(malts);


//List yeast

  var yeast = document.createElement("p");
  var yeastString = beer.ingredients.yeast;
  var trimmedYeast = yeastString.slice(6);
  yeast.innerText = "Yeast - " + trimmedYeast;

  beerItem.appendChild(yeast);

//Add image

  var beerImg = document.createElement("img");
  beerImg.src = beer.image_url;
  beerImg.classList = "beer-image";
  beerImg.alt = "Picture of " + beer.name;
  beerList.appendChild(beerImg);
}






window.addEventListener('load', app);
