package com.rdcodigo;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

import com.rdcodigo.componentes.Pessoa;

/**
 * Unit test for simple App.
 */
public class PessoaTeste 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void deveCalcularIdadeCorretamente()
    {
        Pessoa jessica = new Pessoa("Jessica", LocalDateTime.of(2000, 1, 01, 15, 0, 0));

        Assertions.assertEquals(23, jessica.getIdade());
    }

    @Test
    public void deveCalcularSeEhMaiorDeIdade()
    {
        Pessoa luana = new Pessoa("Luana", LocalDateTime.of(2000, 1, 01, 15, 0, 0));

        Assertions.assertTrue(luana.ehMaiorDeIdade());

        Pessoa joana = new Pessoa("Joana", LocalDateTime.of(2020, 1, 01, 15, 0, 0));

        Assertions.assertFalse(joana.ehMaiorDeIdade());
    }
}
