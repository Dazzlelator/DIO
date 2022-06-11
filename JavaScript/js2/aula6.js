const arr1 = [1, 2, 3, 4]

function mapMultiplier(arr){
    return arr.map(item => item * 2);    
}
console.log(mapMultiplier(arr1))

function filterPar(arr){
    return arr.filter(item => item%2 === 0);
}
console.log(filterPar(arr1))

function somarTudo(arr){
    return arr.reduce((prev, current) => prev + current)
}

console.log(somarTudo(arr1))
