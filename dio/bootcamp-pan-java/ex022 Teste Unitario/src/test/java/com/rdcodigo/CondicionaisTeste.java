package com.rdcodigo;

import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.condition.EnabledIfEnvironmentVariable;
import org.junit.jupiter.api.condition.EnabledOnOs;
import org.junit.jupiter.api.condition.OS;
import org.junit.jupiter.api.Assertions;

public class CondicionaisTeste {
    @Test
    void validarAlgoSomenteNoUsuarioDiro(){
        Assumptions.assumeTrue("root".equals(System.getenv("USER")));
        Assertions.assertEquals(10, 5 + 5);
    }

    @Test
    @EnabledIfEnvironmentVariable(named = "USER", matches = "root")
    void validarAlgoSomenteNoUsuarioRoot(){
        Assumptions.assumeTrue("root".equals(System.getenv("USER")));
        Assertions.assertEquals(10, 5 + 5);
    }

    @EnabledOnOs(value = {OS.WINDOWS})
    void validarAlgoSomenteNoWindows(){
        Assumptions.assumeTrue("root".equals(System.getenv("USER")));
        Assertions.assertEquals(10, 5 + 5);
    }
}