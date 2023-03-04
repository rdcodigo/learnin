package com.rdcodigo;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import com.rdcodigo.componentes.Pessoa;

public class AssertionsTeste {
    @Test
    void validarLancamento(){
        int [] primeiroLancamento = {10, 20, 30};
        int [] segundoLancamento = {10, 20, 30};

        Assertions.assertArrayEquals(primeiroLancamento, segundoLancamento);
    }

    @Test
    void validarSeObjEstaNulo(){
        Pessoa pessoa = null;

        Assertions.assertNull(pessoa);

        pessoa = new Pessoa("Luciano", LocalDateTime.now());

        Assertions.assertNotNull(pessoa);
    }
}
