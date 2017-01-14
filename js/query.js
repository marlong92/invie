var consulta = window.matchMedia("(max-width: 500px)");
consulta.addListener(mediaQuery);

var $burguerButton = document.getElementById("burguer-button");
var $menu = document.getElementById("menu");
function toggleMenu(){
  $menu.classList.toggle("active");
  $burguerButton.classList.toggle("icon-close");
};
function showMenu(){
  $menu.classList.add("active");
  $burguerButton.classList.add("icon-close");
};
function hideMenu(){
  $menu.classList.remove("active");
  $burguerButton.classList.remove("icon-close");
};

function mediaQuery(){
  if (consulta.matches) {
    $burguerButton.addEventListener("touchstart", toggleMenu);
  }else {
    $burguerButton.removeEventListener("touchstart", toggleMenu);
  }
}
mediaQuery();
// $burguerButton.addEventListener("touchstart", toggleMenu);
//
// function toggleMenu(){
//   $menu.classList.toggle("active");
// };

// lazu load
var bLazy = new Blazy ({
    selector: "img"
});
// lazu load
// gestos touch
var $body = document.body;
var gestos = new Hammer($body);
gestos.on("swipeleft", hideMenu);
gestos.on("swiperight", showMenu);
// gestos touch
