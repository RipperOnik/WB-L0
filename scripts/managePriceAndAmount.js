let opened = true
let openedMissing = true
let openedButton
let closedButton
const openedHeader = document.getElementById("cart__items__header--opened")
const closedHeader = document.getElementById("cart__items__header--closed")
const priceTag1 = document.getElementById("price1")
const priceTag2 = document.getElementById("price2")
const priceTag3 = document.getElementById("price3")
const stepper1 = document.getElementById("stepper1")
const stepper2 = document.getElementById("stepper2")
const stepper3 = document.getElementById("stepper3")
const itemsNumber = document.getElementById("items-number")
const itemsNumberAll = document.getElementById("items-number-all")
const itemsBill = document.getElementById("items-bill")
const itemsBillAll = document.getElementById("items-bill-all")

const checkbox1 = document.getElementById("checkbox-item1")
const checkbox2 = document.getElementById("checkbox-item2")
const checkbox3 = document.getElementById("checkbox-item3")
const checkboxAll = document.getElementById("checkbox-items-All")
const item1 = document.getElementById("cart-item1")
const item2 = document.getElementById("cart-item2")
const item3 = document.getElementById("cart-item3")

const decrementBtn1 = document.getElementById("decrement1")
const decrementBtn2 = document.getElementById("decrement2")
const decrementBtn3 = document.getElementById("decrement3")
const incrementBtn1 = document.getElementById("increment1")
const incrementBtn2 = document.getElementById("increment2")
const incrementBtn3 = document.getElementById("increment3")

const deleteItemBtn1 = document.getElementById("delete-item1")
const deleteItemBtn2 = document.getElementById("delete-item2")
const deleteItemBtn3 = document.getElementById("delete-item3")

const initialPriceTag1 = document.getElementById("initial-price1")
const initialPriceTag2 = document.getElementById("initial-price2")
const initialPriceTag3 = document.getElementById("initial-price3")
const initialPriceTagAll = document.getElementById("initial-price-all")
const orderBtn = document.getElementById("order-button-ok")
const totalDiscountTag = document.getElementById("total-discount")
const payBeforeCheckbox = document.getElementById("pay-before-checkbox")








function calculatePriceAndAmount() {
    const num1 = (checkbox1.checked && item1.style.display !== "none") ? parseInt(stepper1.getAttribute("value")) : 0
    const num2 = (checkbox2.checked && item2.style.display !== "none") ? parseInt(stepper2.getAttribute("value")) : 0
    const num3 = (checkbox3.checked && item3.style.display !== "none") ? parseInt(stepper3.getAttribute("value")) : 0

    const price1 = (checkbox1.checked && item1.style.display !== "none") ? parseInt(priceTag1.innerText) : 0
    const price2 = (checkbox2.checked && item2.style.display !== "none") ? parseInt(priceTag2.innerText) : 0
    const price3 = (checkbox3.checked && item3.style.display !== "none") ? parseInt(priceTag3.innerText) : 0


    itemsNumber.innerText = num1 + num2 + num3
    itemsNumberAll.innerText = num1 + num2 + num3
    itemsBill.innerText = price1 + price2 + price3
    itemsBillAll.innerText = price1 + price2 + price3

    if (payBeforeCheckbox.checked) {
        orderBtn.innerText = `Оплатить ${itemsBillAll.innerText} сом`
    }
}

function calculateDiscount() {
    const price1 = (checkbox1.checked && item1.style.display !== "none") ? parseInt(priceTag1.innerText) : 0
    const price2 = (checkbox2.checked && item2.style.display !== "none") ? parseInt(priceTag2.innerText) : 0
    const price3 = (checkbox3.checked && item3.style.display !== "none") ? parseInt(priceTag3.innerText) : 0

    const initialPrice1 = (checkbox1.checked && item1.style.display !== "none") ? parseInt(initialPriceTag1.innerText) : 0
    const initialPrice2 = (checkbox2.checked && item2.style.display !== "none") ? parseInt(initialPriceTag2.innerText) : 0
    const initialPrice3 = (checkbox3.checked && item3.style.display !== "none") ? parseInt(initialPriceTag3.innerText) : 0

    const discount1 = initialPrice1 - price1
    const discount2 = initialPrice2 - price2
    const discount3 = initialPrice3 - price3

    totalDiscountTag.innerText = discount1 + discount2 + discount3
    initialPriceTagAll.innerText = initialPrice1 + initialPrice2 + initialPrice3



}

calculatePriceAndAmount()
calculateDiscount()


checkboxAll.addEventListener('change', function () {
    if (this.checked) {
        checkbox1.checked = true
        checkbox2.checked = true
        checkbox3.checked = true
    }
});

payBeforeCheckbox.addEventListener('change', (event) => {
    const hintText = document.getElementById("hint")

    if (event.target.checked) {
        hintText.style.display = "none"
        orderBtn.innerText = `Оплатить ${itemsBillAll.innerText} сом`

    }
    else {
        hintText.style.display = "block"
        orderBtn.innerText = "Заказать"
    }

})

checkbox1.addEventListener('change', function () {
    calculatePriceAndAmount()
    calculateDiscount()
});
checkbox2.addEventListener('change', function () {
    calculatePriceAndAmount()
    calculateDiscount()
});
checkbox3.addEventListener('change', function () {
    calculatePriceAndAmount()
    calculateDiscount()
});
stepper1.addEventListener('input', function () {
    calculatePriceAndAmount()
    calculateDiscount()
});
stepper2.addEventListener('input', function () {
    calculatePriceAndAmount()
    calculateDiscount()
});
stepper3.addEventListener('input', function () {
    calculatePriceAndAmount()
    calculateDiscount()
});
incrementBtn1.addEventListener("click", () => {
    calculatePriceAndAmount()
    calculateDiscount()
})
incrementBtn2.addEventListener("click", () => {
    calculatePriceAndAmount()
    calculateDiscount()
})
incrementBtn3.addEventListener("click", () => {
    calculatePriceAndAmount()
    calculateDiscount()
})
decrementBtn1.addEventListener("click", () => {
    calculatePriceAndAmount()
    calculateDiscount()
})
decrementBtn2.addEventListener("click", () => {
    calculatePriceAndAmount()
    calculateDiscount()
})
decrementBtn3.addEventListener("click", () => {
    calculatePriceAndAmount()
    calculateDiscount()
})
deleteItemBtn1.addEventListener("click", () => {
    calculatePriceAndAmount()
    calculateDiscount()
})
deleteItemBtn2.addEventListener("click", () => {
    calculatePriceAndAmount()
    calculateDiscount()
})
deleteItemBtn3.addEventListener("click", () => {
    calculatePriceAndAmount()
    calculateDiscount()
})





function collapse(btn) {
    const cartItems = btn.getAttribute("data-for")
    const items = document.getElementById(cartItems)
    // cart items
    if (cartItems !== "cart-items--missing") {
        openedButton = document.getElementById("opened")
        closedButton = document.getElementById("closed")
        opened = !opened
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