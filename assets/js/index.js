const themeTogglebtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon')
let isDark = true;

themeTogglebtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeTogglebtn.classList('active');
    isDark = !isDark;
}

function createCalculator() {
    return {
        display: document.querySelector('.display'),


        start() {
            this.clickButton();
        },

        clickButton() {
            document.addEventListener('click', function(e) {
                const el = e.target;

                if(el.classList.contains('btn')) {
                    this.btnParaDisplay(el.innerText);
                }
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    }
}


const calculatorStart = createCalculator();
calculatorStart.start();
