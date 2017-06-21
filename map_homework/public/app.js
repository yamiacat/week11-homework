//MY VERSION

var initialize = function() {

  var container = document.querySelector("#main-map");
  var coords = {lat: 33.6773, lng: -106.4754}
  var zoom = 10

  mainMap = new MapWrapper(container, coords, zoom);

  var infoContent1 = "<h1>Trinity</h1>" + "<p>Trinity was the code name of the first detonation of a nuclear weapon. It was conducted by the United States Army at 5:29 am on July 16, 1945, as part of the Manhattan Project. The test was conducted in the Jornada del Muerto desert about 35 miles (56 km) southeast of Socorro, New Mexico, on what was then the USAAF Alamogordo Bombing and Gunnery Range (now part of White Sands Missile Range).</p>" + "<p>Attribution: Trinity, <a href='https://en.wikipedia.org/wiki/Trinity_(nuclear_test)#Test_site'>https://en.wikipedia.org/wiki/Trinity_(nuclear_test)'</a>"

  var marker = mainMap.addInfoMarker(coords, infoContent1);

  var coords2 = {lat: 11.583333, lng: 165.383333}

  var infoContent2 = "<h1>Bikini Atoll</h1>" + "<p>Bikini Atoll is in the Marshall Islands, and consists of 23 islands surrounding a deep central lagoon. Between 1946 and 1958, 23 nuclear devices were detonated by the United States at seven test sites located on the reef, inside the atoll, in the air, or underwater.[16] They had a combined fission yield of 42.2 Mt.</p>" + "<p>Attribution: Bikini Atoll, <a href='https://en.wikipedia.org/wiki/Bikini_Atoll#Nuclear_test_site'>'https://en.wikipedia.org/wiki/Bikini_Atoll#Nuclear_test_site'</a>"

  var marker2 = mainMap.addInfoMarker(coords2, infoContent2);


  var niceButton = document.querySelector("#nice-button");
  niceButton.addEventListener("click", handleButtonClick);

}
  var handleButtonClick = function() {
    mainMap.motate({lat: 11.583333, lng: 165.383333});
  }



window.addEventListener("load", initialize);
