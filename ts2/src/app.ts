let button = document.getElementById("butt");
let input1 = document.getElementById("inp1") as HTMLInputElement;
let input2 = document.getElementById("inp2") as HTMLInputElement;

function adicionarNumero(num1:number, num2:number): number{ //define retorno como numerico
    return num1+num2;
}


    button?.addEventListener('click', () => { // ? = if null or not
        if(input1 && input2){
            console.log(adicionarNumero(Number(input1.value), Number(input2.value)))
        }
    })
///////////////////////////////////////////////////////////////////////////////////////////
type input = number | string;

function somarValor(ipt1: input, ipt2: input){
    if(typeof ipt1 === "string" || typeof ipt2 === "string"){
        return ipt1.toString() + ipt2.toString()
    }else{
        return ipt1 + ipt2
    }

}

console.log(somarValor("Ola", 3))
console.log(somarValor(3, 3))
console.log(somarValor("Ola", "mundo"))