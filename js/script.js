let val1 = '';
let val2 = 0;
thisVal = true;
const input = document.querySelector('.calc__conclusion > input');

document.querySelector('.calc__btn').addEventListener('click', (e) => {
    if (e.srcElement.offsetParent.classList.contains('number')) {
        val1 += e.target.outerText;
    }
    input.value = val1;
})


function changeValue() {
    if (thisVal) {
        val1 = input.value;
    }
}