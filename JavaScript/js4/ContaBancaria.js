class ContaBancaria{
    contructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        
    }

    set saldo(saldo){
        this.saldo = saldo;
    }

    get saldo(){
        return this.saldo;
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