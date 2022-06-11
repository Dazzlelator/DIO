const alunos = [
    {
        nome: "aluno1",
        nota: 10,
        turma: "1-B"
    },
    {
        nome: "aluno2",
        nota: 9,
        turma: "1-B"
    },
    {
        nome: "aluno3",
        nota: 10,
        turma: "1-B"
    },
]

function alunosAprovados(alunos, media){
    let aprovados = [];
    
    for(i in alunos){        
        if(alunos[i].nota >= media){            
            aprovados.push(alunos[i]);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 5));


const pessoas = [
    {
        nome: "pessoa1",
        idade: 20
    },
    {
        nome: "pessoa2",
        idade: 21
    },
    {
        nome: "pessoa3",
        idade: 22
    }
]

function calculaIdade(anos){

    return `Daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} anos de idade`
}

console.log(calculaIdade.call(pessoas[1],10))