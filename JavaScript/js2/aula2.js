
//solucao 1
function verificaPalindromo(string){
    let verificador = true;
    if(string){   
        let i = 0;     
        for(let finalString = string.length; finalString > 0; finalString--){            
            if(string[i] == string[finalString - 1]){
                verificador = true;
            }else{
                verificador = false;
                break;                
            }           
            i++;
        }
        if(verificador){
            return "É políndromo"
        }else{
            return "Não é políndromo"
        }       
        
    }else{
        console.log("náo existe");
        return null;
    }
}


console.log(verificaPalindromo("araraa"))

//solucao 2
function verificaPolindromo2(string){
    if(!string) return "String inexistente";
    return string.split("").reverse().join("") === string;
}

console.log(verificaPolindromo2("arara"));