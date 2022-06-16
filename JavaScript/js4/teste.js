class ContaBancaria{
    contructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
        
    }

    set saldo(saldo){
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    depositar(dinheiro){
        if(dinheiro > 0){
            this.saldo = this.saldo + dinheiro;
        }    
    }

    sacar(dinheiro){
        if(this.saldo >= dinheiro){
            this.saldo = this.saldo - dinheiro;
        }
    }
    
}

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
class ContaPoupanca extends ContaBancaria{
    contructor(agencia, numero){
        super.agencia = agencia;
        super.numero = numero;
        super.tipo = "conta-poupanca";       
    }
}

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

const conta1 = new ContaUniversitaria(5, 1232);
        conta1.depositar(1000);
        console.log(conta1.saldo)
