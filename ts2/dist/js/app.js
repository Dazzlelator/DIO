"use strict";
let button = document.getElementById("butt");
let input1 = document.getElementById("inp1");
let input2 = document.getElementById("inp2");
function adicionarNumero(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    if (input1 && input2) {
        console.log(adicionarNumero(Number(input1.value), Number(input2.value)));
    }
});
function somarValor(ipt1, ipt2) {
    if (typeof ipt1 === "string" || typeof ipt2 === "string") {
        return ipt1.toString() + ipt2.toString();
    }
    else {
        return ipt1 + ipt2;
    }
}
console.log(somarValor("Ola", 3));
console.log(somarValor(3, 3));
console.log(somarValor("Ola", "mundo"));
