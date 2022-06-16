class ContaPoupanca extends ContaBancaria{
    contructor(agencia, numero){
        super.agencia = agencia;
        super.numero = numero;
        super.tipo = "conta-poupanca";       
    }
}