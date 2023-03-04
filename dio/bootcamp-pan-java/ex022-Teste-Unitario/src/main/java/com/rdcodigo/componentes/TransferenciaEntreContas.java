package com.rdcodigo.componentes;

public class TransferenciaEntreContas {
    
    public void transfere(Conta contaOrigem, Conta contraDestino, int valor){
        if(valor <= 0){
            throw new IllegalArgumentException("Valor deve ser maior que zero");
        }
    }
}
