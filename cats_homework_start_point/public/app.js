var app = function() {

var catUl = document.createElement("ul");
catUl.classList.add("cat");

var nameLi = document.createElement("li");
nameLi.innerText = "Name: Fiona";

var foodLi = document.createElement("li");
foodLi.innerText = "Favourite food: Human disappointment";

var picLi = document.createElement("li");

var picImg = document.createElement("img");
picImg.src = "http://www.wbir.com/img/resize/content.wbir.com/photo/2017/04/07/BABY%20HIPPO_1491561648337_9180558_ver1.0.jpg?preset=534-401";
picImg.width = "500";

picLi.appendChild(picImg);

catUl.appendChild(nameLi);
catUl.appendChild(foodLi);
catUl.appendChild(picLi);


var catList = document.querySelector("#cats");
catList.appendChild(catUl);

};




window.onload = app;
