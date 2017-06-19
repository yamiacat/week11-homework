var app = function() {


var addCat = function(name, favouriteFood, imgURL) {
  var catUl = createCatElement();
  var nameLi = createNameElement(name);
  var foodLi = createFoodElement(favouriteFood);
  var picLi = createPicElement(imgURL);

  var catList = document.querySelector("#cats");
  appendElements(catList, catUl, nameLi, foodLi, picLi);
  };


var createCatElement = function() {
  var catUl = document.createElement("ul");
  catUl.classList.add("cat");
  return catUl;
};

var createNameElement = function(name) {
  var nameLi = document.createElement("li");
  nameLi.innerText = "Name: " + name;
  return nameLi;
};

var createFoodElement = function(favouriteFood) {
  var foodLi = document.createElement("li");
  foodLi.innerText = "Favourite food: " + favouriteFood;
  return foodLi;
};

var createPicElement = function(imgURL) {
  var picLi = document.createElement("li");
  var picImg = document.createElement("img");
  picImg.src = imgURL;
  picImg.width = "500";
  picLi.appendChild(picImg);
  return picLi;
};

var appendElements = function(catList, catUl, nameLi, foodLi, picLi) {
  catUl.appendChild(nameLi);
  catUl.appendChild(foodLi);
  catUl.appendChild(picLi);
  catList.appendChild(catUl);
};



addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");

addCat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");

addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");

addCat("Fiona", "Human disappointment", "http://www.wbir.com/img/resize/content.wbir.com/photo/2017/04/07/BABY%20HIPPO_1491561648337_9180558_ver1.0.jpg?preset=534-401");


};




window.onload = app;
