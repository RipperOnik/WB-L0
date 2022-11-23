let opened = true
let openedMissing = true
let openedButton
let closedButton
const openedHeader = document.getElementById("left-cart-items-header-opened")
const closedHeader = document.getElementById("left-cart-items-header-closed")
const priceTag1 = document.getElementById("price1")
const priceTag2 = document.getElementById("price2")
const priceTag3 = document.getElementById("price3")
const stepper1 = document.getElementById("stepper1")
const stepper2 = document.getElementById("stepper2")
const stepper3 = document.getElementById("stepper3")
const itemsNumber = document.getElementById("items-number")
const itemsBill = document.getElementById("items-bill")
const checkbox1 = document.getElementById("item1")
const checkbox2 = document.getElementById("item2")
const checkbox3 = document.getElementById("item3")
const checkboxAll = document.getElementById("chooseAll")








function calculatePriceAndAmount() {
    const num1 = checkbox1.checked ? parseInt(stepper1.getAttribute("value")) : 0
    const num2 = checkbox2.checked ? parseInt(stepper2.getAttribute("value")) : 0
    const num3 = checkbox3.checked ? parseInt(stepper3.getAttribute("value")) : 0

    const price1 = checkbox1.checked ? parseInt(priceTag1.innerText) : 0
    const price2 = checkbox2.checked ? parseInt(priceTag2.innerText) : 0
    const price3 = checkbox3.checked ? parseInt(priceTag3.innerText) : 0


    itemsNumber.innerText = num1 + num2 + num3
    itemsBill.innerHTML = price1 + price2 + price3
}

calculatePriceAndAmount()


checkboxAll.addEventListener('change', function () {
    if (this.checked) {
        checkbox1.checked = true
        checkbox2.checked = true
        checkbox3.checked = true
    }
});


checkbox1.addEventListener('change', function () {
    calculatePriceAndAmount()
});
checkbox2.addEventListener('change', function () {
    calculatePriceAndAmount()
});
checkbox3.addEventListener('change', function () {
    calculatePriceAndAmount()
});






function collapse(btn) {
    const cartItems = btn.getAttribute("for")
    const items = document.getElementById(cartItems)
    // cart items
    if (cartItems !== "left-cart-items-missing") {
        openedButton = document.getElementById("opened")
        closedButton = document.getElementById("closed")
        opened = !opened
        calculatePriceAndAmount()
        if (opened) {
            openedHeader.style.display = "flex"
            closedHeader.style.display = "none"
            closedButton.style.display = "none"
            openedButton.style.display = "inline"
            items.style.display = "flex"
        }
        else {
            openedHeader.style.display = "none"
            closedHeader.style.display = "block"
            closedButton.style.display = "inline"
            openedButton.style.display = "none"
            items.style.display = "none"
        }
    }
    // missing items
    else {
        openedButton = document.getElementById("opened-missing")
        closedButton = document.getElementById("closed-missing")
        openedMissing = !openedMissing
        if (openedMissing) {
            closedButton.style.display = "none"
            openedButton.style.display = "inline"
            items.style.display = "flex"
        }
        else {
            closedButton.style.display = "inline"
            openedButton.style.display = "none"
            items.style.display = "none"
        }
    }
}