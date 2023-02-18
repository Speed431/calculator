let val1 = '';
let val2 = '';
type = '';
const input = document.querySelector('.calc__conclusion > input');

document.querySelector('.calc__btn').addEventListener('click', (e) => {
    if (e.srcElement.offsetParent.classList.contains('number')) {
        val1 += e.target.outerText;
        input.value = val1;
    }

});

function changeValue() {
    val1 = input.value;
}

function operation(action) {
    val2 = val1;
    val1 = '';
    type = action;
}

function equal() {
    if (val1) {
        switch (type) {
            case 'plus':
                val1 = +val2 + +val1;
                break;
            case 'minus':
                val1 = +val2 - +val1;
                break;
            case 'multiply':
                val1 = +val2 * +val1;
                break;
            case 'divide':
                val1 = +val2 / +val1;
                break;
            case 'percent':
                val1 = +val2 % +val1;
                break;
        }

        val2 = '';
        input.value = val1;
    }
}

function cleare() {
    val1 = "";
    val2 = "";
    input.value = "";
}

function invert() {
    val1 = -val1;
    input.value = val1;
}