var btnAbrirPopup = document.getElementById("btn-abrir-popup"),
  overlay = document.getElementById("overlay"),
  popup = document.getElementById("popup"),
  btnCerrarPopup = document.getElementById("popup__close");

btnAbrirPopup.addEventListener("click", function () {
  overlay.classList.add("active");
  popup.classList.add("active");
});

btnCerrarPopup.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.remove("active");
  popup.classList.remove("active");
});
