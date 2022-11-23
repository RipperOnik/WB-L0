const deliveryPopupContainer = document.getElementById("delivery-popup-container")
const deliveryPopupButton = document.getElementById("delivery-popup-button")
const deliveryCloseButton = document.getElementById("delivery-popup-close-button")

function togglePopup() {
    deliveryPopupContainer.classList.toggle("show-popup");
}

function windowOnClick(event) {
    if (event.target === deliveryPopupContainer) {
        togglePopup();
    }
}

deliveryPopupButton.addEventListener("click", togglePopup);
deliveryCloseButton.addEventListener("click", togglePopup);
window.addEventListener("click", windowOnClick);