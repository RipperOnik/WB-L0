const stepper1 = document.getElementById("stepper1")
const stepper2 = document.getElementById("stepper2")
const stepper3 = document.getElementById("stepper3")

const decrementBtn1 = document.getElementById("decrement1")
const decrementBtn2 = document.getElementById("decrement2")
const decrementBtn3 = document.getElementById("decrement3")

const incrementBtn1 = document.getElementById("increment1")
const incrementBtn2 = document.getElementById("increment2")
const incrementBtn3 = document.getElementById("increment3")

function manageButtons() {
    if (stepper1.value === stepper1.min) {
        decrementBtn1.style.opacity = 0.2
        decrementBtn1.style.cursor = "default"
        incrementBtn1.style.opacity = 1
        incrementBtn1.style.cursor = "pointer"
    }
    else if (stepper1.value === stepper1.max) {
        incrementBtn1.style.opacity = 0.2
        incrementBtn1.style.cursor = "default"
        decrementBtn1.style.opacity = 1
        decrementBtn1.style.cursor = "pointer"
    }
    else {
        decrementBtn1.style.opacity = 1
        decrementBtn1.style.cursor = "pointer"
        incrementBtn1.style.opacity = 1
        incrementBtn1.style.cursor = "pointer"
    }

    if (stepper2.value === stepper2.min) {
        decrementBtn2.style.opacity = 0.2
        decrementBtn2.style.cursor = "default"
        incrementBtn2.style.opacity = 1
        incrementBtn2.style.cursor = "pointer"
    }
    else if (stepper2.value === stepper2.max) {
        incrementBtn2.style.opacity = 0.2
        incrementBtn2.style.cursor = "default"
        decrementBtn2.style.opacity = 1
        decrementBtn2.style.cursor = "pointer"
    }
    else {
        decrementBtn2.style.opacity = 1
        decrementBtn2.style.cursor = "pointer"
        incrementBtn2.style.opacity = 1
        incrementBtn2.style.cursor = "pointer"
    }

    if (stepper3.value === stepper3.min) {
        decrementBtn3.style.opacity = 0.2
        decrementBtn3.style.cursor = "default"
        incrementBtn3.style.opacity = 1
        incrementBtn3.style.cursor = "pointer"
    }
    else if (stepper3.value === stepper3.max) {
        incrementBtn3.style.opacity = 0.2
        incrementBtn3.style.cursor = "default"
        decrementBtn3.style.opacity = 1
        decrementBtn3.style.cursor = "pointer"
    }
    else {
        decrementBtn3.style.opacity = 1
        decrementBtn3.style.cursor = "pointer"
        incrementBtn3.style.opacity = 1
        incrementBtn3.style.cursor = "pointer"
    }
}

manageButtons()




function stepper(btn) {
    const inputId = btn.getAttribute("for");
    const myInput = document.getElementById(inputId);
    const id = btn.getAttribute("class");
    const min = myInput.getAttribute("min");
    const max = myInput.getAttribute("max");
    const step = myInput.getAttribute("step");
    const val = myInput.getAttribute("value");
    const calcStep = (id == "increment") ? (step * 1) : (step * -1);
    const newValue = parseInt(val) + calcStep;

    if (newValue >= min && newValue <= max) {
        myInput.setAttribute("value", newValue);
    }
    manageButtons()
}

