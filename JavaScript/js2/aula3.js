function subPorZero(array){
    let verificador = -1;
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 === 0){
            array[i] = 0;
            verificador++;
        }
    }
    return verificador < 0 ?  verificador: array;
    
}
let lista = [1, 3, 7, 5, 3, 1, 2]
console.log(subPorZero(lista))