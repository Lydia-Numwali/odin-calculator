const input = document.getElementById("inp");
let currentExpression = "";
let isEvaluated = false;

function AT_add(value) {
    if (isEvaluated) {
        currentExpression = "";
        isEvaluated = false;
    }

    currentExpression += value;
    input.value = currentExpression;
}


function exe() {
    try {
        const result = eval(currentExpression);
        currentExpression = String(result);
        input.value = currentExpression;
        isEvaluated = true;
    } catch (error) {
        input.value = "Error";
    }
}

function cls() {
    currentExpression = "";
    input.value = "";
    isEvaluated = false;
}
function cancel() {
    currentExpression = currentExpression.slice(0, -1);
    input.value = currentExpression;
}
input.addEventListener("keydown", (event) => {
    event.preventDefault();
});
document.querySelectorAll(".btns button").forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        AT_add(value);
    });
});

document.querySelector("button#equals").addEventListener("click", exe);
document.querySelector("button#clear").addEventListener("click", cls);
document.querySelector("button#backspace").addEventListener("click", cancel);
