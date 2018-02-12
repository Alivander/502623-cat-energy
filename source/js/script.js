// Открытие/скрытие меню на мобильных

var body = document.querySelector("body");
var nav = document.querySelector(".navigation");
var navToggle = nav.querySelector(".navigation__toggle");
var navList = nav.querySelector(".navigation__list");

body.classList.remove("no-js");
body.classList.add("js");

navList.classList.add("navigation__list--close");

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  navList.classList.toggle("navigation__list--close");
  navToggle.classList.toggle("navigation__toggle--close");
});

// Интерактивная карта

function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(((screen.width < 1300) ? 59.93877121663107 : 59.939075), ((screen.width < 1300) ? 30.323274149999975 : 30.31965))
  };
  var map = new google.maps.Map(document.getElementById("interactive-map"), mapOptions);
  var image = (screen.width < 768) ? "img/map-pin-small.png" : "img/map-pin.png";
  var myLatLng = new google.maps.LatLng(59.93877121663107, 30.323274149999975);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, "load", initialize);
