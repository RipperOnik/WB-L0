const deliveryPopupContainer = document.getElementById("delivery-popup-container")
const deliveryPopupButton = document.getElementById("delivery-popup-button")
const deliveryCloseButton = document.getElementById("delivery-popup-close-button")
const tabIssue = document.getElementById("issue-points-tab")
const tabCourier = document.getElementById("courier-tab")
const addressField = document.getElementById("address")
const ratingField = document.getElementById("rating")
function togglePopup() {
    deliveryPopupContainer.classList.toggle("show-popup");
}

function windowOnClick(event) {
    if (event.target === deliveryPopupContainer) {
        togglePopup();
    }
}


function closePopupHandler() {
    togglePopup()
    if (document.querySelector(".popup-tab-active") === tabIssue) {
        const radio = document.querySelector('input[name="issue-point"]:checked')
        const value = radio.value
        let [address, rating] = value.split("$$$")
        address = address.trim()
        rating = rating.trim()
        addressField.innerText = address
        ratingField.innerText = rating
    }
    else {
        const radio = document.querySelector('input[name="courier-address"]:checked')
        const value = radio.value
        const address = value.trim()
        addressField.innerText = address
    }
}



deliveryPopupButton.addEventListener("click", togglePopup);
deliveryCloseButton.addEventListener("click", closePopupHandler);
window.addEventListener("click", windowOnClick);