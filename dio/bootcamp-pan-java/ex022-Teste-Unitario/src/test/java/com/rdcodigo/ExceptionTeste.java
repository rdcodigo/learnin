package com.rdcodigo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import com.rdcodigo.componentes.Conta;
import com.rdcodigo.componentes.TransferenciaEntreContas;

public class ExceptionTeste {

    Conta contaOrigem = new Conta(123456, 0);
    Conta contaDestino = new Conta(2352353, 100);

    TransferenciaEntreContas transferenciaEntreContas = new TransferenciaEntreContas();
    
    @Test
    public void validarCenarioDeExcecaoNaTransferencia(){
        Assertions.assertThrows(IllegalArgumentException.class, tranferir());

    }

    public void tranferir(){
        transferenciaEntreContas.transfere(contaOrigem, contaDestino, -1);
    }
}
