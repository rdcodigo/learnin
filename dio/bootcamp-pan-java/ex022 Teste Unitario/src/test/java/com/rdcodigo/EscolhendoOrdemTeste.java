package com.rdcodigo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;


// @TestMethodOrder(MethodOrderer.MethodName.class)

public class EscolhendoOrdemTeste {
    
    @Order(4)
    @Test
    void validaFluxoA(){
        Assertions.assertTrue(true);
    }

    @Order(3)
    @Test
    void validaFluxoB(){
        Assertions.assertTrue(true);
    }

    @Order(1)
    @Test
    void validaFluxoC(){
        Assertions.assertTrue(true);
    }

    @Order(2)
    @Test
    void validaFluxoD(){
        Assertions.assertTrue(true);
    }
}
