let mapLink = document.querySelector(".contacts-button-map");
let mapFooterLink = document.querySelector(".js-footer-map");

let mapPopup = document.querySelector(".modal-map");
let mapClose = mapPopup.querySelector(".modal-close");

if (mapLink) {
  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });
}

if (mapFooterLink) {
  mapFooterLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });
}

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if ( (evt.keyCode === 27) && (mapPopup.classList.contains("modal-show")) ) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  }
});