class ContaCorrente extends ContaBancaria{
    contructor(agencia, numero, cartaoCredito){
        super.agencia = agencia;
        super.numero = numero;
        super.tipo = "conta-corrente";
        this.cartaoCredito = cartaoCredito;
    }

    set cartaoCredito(cartaoCredito){
        this.cartaoCredito = cartaoCredito;
    }
    
    get cartaoCredito(){
        return this.cartaoCredito;
    }
}