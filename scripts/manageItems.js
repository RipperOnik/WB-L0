function deleteItem(btn) {
    const itemId = btn.getAttribute("for")
    const item = document.getElementById(itemId)
    item.style.display = "none"
}