
var initialize = function() {

var container = document.querySelector("#main-map");
var coords = {lat: 33.6773, lng: -106.4754}
var zoom = 10

  var mainMap = new MapWrapper(container, coords, zoom);

  var infoContent = "<h1>Trinity</h1>" + "<p>Trinity was the code name of the first detonation of a nuclear weapon. It was conducted by the United States Army at 5:29 am on July 16, 1945, as part of the Manhattan Project. The test was conducted in the Jornada del Muerto desert about 35 miles (56 km) southeast of Socorro, New Mexico, on what was then the USAAF Alamogordo Bombing and Gunnery Range (now part of White Sands Missile Range).</p>" + "<p>Attribution: Trinity, <a href='https://en.wikipedia.org/wiki/Trinity_(nuclear_test)#Test_site'>https://en.wikipedia.org/wiki/Trinity_(nuclear_test)'</a>"


  var marker = mainMap.addInfoMarker(coords, infoContent);



}




window.addEventListener("load", initialize);
