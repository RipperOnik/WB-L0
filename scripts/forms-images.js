const itemImg1 = document.getElementById("item-img1")
const itemImg2 = document.getElementById("item-img2")
const itemImg21 = document.getElementById("item-img2(1)")
const itemImg3 = document.getElementById("item-img3")
const dateDeliveryItem1 = document.getElementById("date-delivery-item1")
const dateDeliveryItem2 = document.getElementById("date-delivery-item2")




function checkCartItems() {
    const num1 = (checkbox1.checked && item1.style.display !== "none") ? parseInt(stepper1.getAttribute("value")) : 0
    const num2 = (checkbox2.checked && item2.style.display !== "none") ? parseInt(stepper2.getAttribute("value")) : 0
    const num3 = (checkbox3.checked && item3.style.display !== "none") ? parseInt(stepper3.getAttribute("value")) : 0
    if (num1 === 0) {
        itemImg1.style.display = "none"
    }
    else {
        itemImg1.style.display = "block"
    }
    if (num2 === 0) {
        itemImg2.style.display = "none"
        itemImg21.style.display = "none"
    }
    else {
        itemImg2.style.display = "block"
        itemImg21.style.display = "block"
    }

    if (num3 === 0) {
        itemImg3.style.display = "none"
    }
    else {
        itemImg3.style.display = "block"
    }

    if (itemImg1.style.display === "none" && itemImg2.style.display === "none" && itemImg3.style.display === "none") {
        dateDeliveryItem1.style.display = "none"
    }
    else {
        dateDeliveryItem1.style.display = "flex"
    }
    if (itemImg21.style.display === "none") {
        dateDeliveryItem2.style.display = "none"
    }
    else {
        dateDeliveryItem2.style.display = "flex"
    }


}

checkbox1.addEventListener('change', function () {
    checkCartItems()
});
checkbox2.addEventListener('change', function () {
    checkCartItems()
});
checkbox3.addEventListener('change', function () {
    checkCartItems()
});
checkboxAll.addEventListener('change', function () {
    checkCartItems()
});
