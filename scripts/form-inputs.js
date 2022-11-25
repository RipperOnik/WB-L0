
const formInputs = document.querySelectorAll("input.form__input")

function checkInput(event) {
    const value = event.target.value
    const labelId = event.target.getAttribute("data-for")
    const labelTag = document.getElementById(labelId)
    if (value.length > 0) {
        labelTag.style.display = "inline"
    }
    else {
        labelTag.style.display = "none"
    }

}

formInputs.forEach(formInput => {
    formInput.addEventListener('input', checkInput)
})