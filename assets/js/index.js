const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};

function Calculator() {
    this.display = document.querySelector("#display");

    this.capture = () => {
        document.addEventListener('click', event => {
            const item = event.target;

            if (item.id == "clear") {
                display.innerText = "";
            } else if (item.id == "backspace") {
                let string = display.innerText.toString();
                display.innerText = string.substr(0, string.length - 1);
            } else if (display.innerText != "" && item.id == "equal") {
                display.innerText = eval(display.innerText);
            } else if (display.innerText == "" && item.id == "equal") {
                display.innerText = "Error!";
                setTimeout(() => (display.innerText = ""), 2000);
            } else if (item.classList.contains('btn')) {
                display.innerText += item.id;
            }
        });
    };

    this.start = () => {
        this.capture();
    }
}

const calculadora = new Calculator();
calculadora.start();










