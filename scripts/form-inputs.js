
const formInputs = document.querySelectorAll("input.form__input")
const formPhoneInput = document.getElementById("tel-input")

const orderButton = document.getElementById("order-button-ok")
const errorLabelIds = { nameError: 'name-error-label', surnameError: 'surname-error-label', emailError: 'email-error-label', telError: 'tel-error-label', innError: 'inn-error-label' }

const errorEmptyMessages = new Map()
errorEmptyMessages.set(errorLabelIds.nameError, 'Укажите имя')
errorEmptyMessages.set(errorLabelIds.surnameError, 'Введите фамилию')
errorEmptyMessages.set(errorLabelIds.emailError, 'Укажите электронную почту')
errorEmptyMessages.set(errorLabelIds.telError, 'Укажите номер телефона')
errorEmptyMessages.set(errorLabelIds.innError, 'Укажите ИНН')

const errorWrongMessages = new Map()
errorWrongMessages.set(errorLabelIds.emailError, 'Проверьте адрес электронной почты')
errorWrongMessages.set(errorLabelIds.telError, 'Формат: +9 999 999 99 99')
errorWrongMessages.set(errorLabelIds.innError, 'Формат: 1234567')

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// const phoneRegex = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/
// const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/

// const phoneRegex = /^[\+]\d{1}[-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/
const phoneRegex = /^[\+]\d{1}[- ]?[\(]?\d{3}[\)]?[- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/

// Lifts a placeholder when user types something in
function liftPlaceholder(event) {
    const value = event.target.value
    const labelId = event.target.getAttribute("data-label")
    const labelTag = document.getElementById(labelId)
    if (value.length > 0) {
        labelTag.style.visibility = "visible"
    }
    else {
        labelTag.style.visibility = "hidden"
    }
}

function validateEmail(event) {
    const value = event.target.value
    const input = event.target
    const errorEmptyLabelId = input.getAttribute("data-error")
    const errorEmptyLabel = document.getElementById(errorEmptyLabelId)
    if (value.match(emailRegex)) {
        errorEmptyLabel.style.visibility = "hidden"
        input.classList.remove("form__input--error")
        input.removeEventListener('input', validateEmail)
    }
}
function validatePhoneNumber(event) {
    const value = event.target.value
    const input = event.target
    const errorEmptyLabelId = input.getAttribute("data-error")
    const errorEmptyLabel = document.getElementById(errorEmptyLabelId)
    if (value.match(phoneRegex)) {
        errorEmptyLabel.style.visibility = "hidden"
        input.classList.remove("form__input--error")
        input.removeEventListener('input', validatePhoneNumber)
    }
}

function validateNotEmpty(event) {
    const value = event.target.value
    const input = event.target
    const errorEmptyLabelId = input.getAttribute("data-error")
    const errorEmptyLabel = document.getElementById(errorEmptyLabelId)
    if (value.length > 0) {
        errorEmptyLabel.style.visibility = "hidden"
        input.classList.remove("form__input--error")
        input.removeEventListener('input', validateNotEmpty)
    }
}
function validateInputs(event) {
    const input = event.target
    const value = event.target.value
    const errorEmptyLabelId = input.getAttribute("data-error")
    const errorEmptyLabel = document.getElementById(errorEmptyLabelId)
    const errorMessage = errorWrongMessages.get(errorEmptyLabelId)
    if (errorEmptyLabelId === errorLabelIds.emailError) {
        if (!value.match(emailRegex)) {
            errorEmptyLabel.style.visibility = "visible"
            input.classList.add("form__input--error")
            errorEmptyLabel.innerText = errorMessage
            // when a user made a mistake, we will listen to validate this field 
            input.addEventListener('input', validateEmail)
        }
        else {
            errorEmptyLabel.style.visibility = "hidden"
            input.classList.remove("form__input--error")
        }
    }
    else if (errorEmptyLabelId === errorLabelIds.telError) {
        if (!value.match(phoneRegex)) {
            errorEmptyLabel.style.visibility = "visible"
            input.classList.add("form__input--error")
            errorEmptyLabel.innerText = errorMessage
            // when a user made a mistake, we will listen to validate this field 
            input.addEventListener('input', validatePhoneNumber)
        }
        else {
            errorEmptyLabel.style.visibility = "hidden"
            input.classList.remove("form__input--error")
        }
    }
}
// prevent typing letters
// formPhoneInput.addEventListener('input', (event) => {
//     const input = event.target
//     const value = event.target.value
//     const charCode = value.length > 0 ? value.charCodeAt(value.length - 1) : 49
//     console.log(charCode);

//     if (!((charCode >= 48 && charCode <= 57) || charCode == 43 || charCode == 45 || charCode == 40 || charCode == 41 || charCode == 32)) {
//         input.value = input.value.slice(0, value.length - 1)
//     }
// })

// prevent typing letters
formPhoneInput.addEventListener('keydown', event => {
    const charCode = event.which
    // console.log(charCode);
    if ((charCode >= 65 && charCode <= 90) || charCode == 32) {
        event.preventDefault()
    }
})
let prevLength = 0
// add space between number groups
formPhoneInput.addEventListener('input', event => {
    const input = event.target
    if ((input.value.length == 3 || input.value.length == 7 || input.value.length == 11 || input.value.length == 14) && input.value.length > prevLength) {
        const lastChar = input.value.charAt(input.value.length - 1)
        input.value = input.value.slice(0, input.value.length - 1)
        input.value += " "
        input.value += lastChar
    }
    if (input.value.charAt(input.value.length - 1) === " " && input.value.length < prevLength) {
        input.value = input.value.slice(0, input.value.length - 1)
    }
    prevLength = input.value.length

})

formInputs.forEach(formInput => {
    formInput.addEventListener('input', liftPlaceholder)
    formInput.addEventListener('focusout', validateInputs)
})


orderButton.addEventListener('click', () => {
    formInputs.forEach(input => {
        const errorEmptyLabelId = input.getAttribute("data-error")
        const errorEmptyLabel = document.getElementById(errorEmptyLabelId)
        const errorMessage = errorEmptyMessages.get(errorEmptyLabelId)
        if (input.value.length === 0) {
            errorEmptyLabel.style.visibility = "visible"
            input.classList.add("form__input--error")
            errorEmptyLabel.innerText = errorMessage
            input.addEventListener('input', validateNotEmpty)
        }
        else {
            errorEmptyLabel.style.visibility = "hidden"
            input.classList.remove("form__input--error")
        }
    })
})

// Debounce 
// function debounce(callback, delay) {
//     let timer
//     return (...args) => {
//         if (timer) {
//             clearTimeout(timer)
//         }
//         timer = setTimeout(() => {
//             callback(...args)
//         }, delay)
//     }
// }
// const debounceInput = debounce((event) => {
//     console.log(event.target.value)
// }, 1000)
// formInputs.forEach(formInput => {
//     formInput.addEventListener('input', debounceInput)
// })