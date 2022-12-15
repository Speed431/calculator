let val1 = '';
let val2 = '';
type = '';
const input = document.querySelector('.calc__conclusion > input');

document.querySelector('.calc__btn').addEventListener('click', (e) => {
    if (e.srcElement.offsetParent.classList.contains('number')) {
        val1 += e.target.outerText;
        input.value = val1;
    }

})


function changeValue() {
    if (thisVal) {
        val1 = input.value;
    }
}

function plus() {
    val2 = val1;
    val1 = '';
    type = "plus"
}

function minus() {
    val2 = val1;
    val1 = '';
    type = 'minus';
}

function multiply() {
    val2 = val1;
    val1 = '';
    type = 'multiply';
}

function divide() {
    val2 = val1;
    val1 = '';
    type = 'divide';
}

function equal() {
    if (val1 != "") {
        if (type == 'plus') {
            val1 = +val2 + +val1;
        } else if (type == 'minus') {
            val1 = +val2 - +val1;
        } else if (type == 'multiply') {
            val1 = +val2 * +val1;
        } else if (type == 'divide') {
            val1 = +val2 / +val1;
        }
        input.value = val1;
        val2 = '';
    } else {
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