
function stepper(btn) {
    const inputId = btn.getAttribute("for");
    const myInput = document.getElementById(inputId);
    let id = btn.getAttribute("class");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = myInput.getAttribute("value");
    let calcStep = (id == "increment") ? (step * 1) : (step * -1);
    let newValue = parseInt(val) + calcStep;
    console.log(id)

    if (newValue >= min && newValue <= max) {
        myInput.setAttribute("value", newValue);
    }
}

