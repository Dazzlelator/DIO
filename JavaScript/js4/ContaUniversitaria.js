class ContaUniversitaria extends ContaBancaria{
    contructor(agencia, numero){
        super.agencia = agencia;
        super.numero = numero;
        super.tipo = "conta-universitaria";       
    }

    sacar(dinheiro){        
        if(dinheiro <= 500){
            super.sacar(dinheiro);
        }
    }
}