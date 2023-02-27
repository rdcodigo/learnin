package com.rdcodigo;

import java.time.LocalDateTime;

import org.junit.jupiter.api.*;

import com.rdcodigo.componentes.BancoDeDados;
import com.rdcodigo.componentes.Pessoa;

public class ConsultarDadosDePessoaTeste {

    @BeforeAll
    static void configurarConexao() {
        BancoDeDados.iniciarConecao();
        System.out.println("rodou configurarConexao");
    }

    @BeforeEach
    static void insereDadosParaTeste() {
        BancoDeDados.insereDados(new Pessoa("Joao", LocalDateTime.now()));
        ;
    }

    @AfterEach
    static void removeDadosParaTeste() {
        BancoDeDados.removeDados(new Pessoa("Joao", LocalDateTime.now()));
        ;
    }

    @Test
    static void validarDadosDeRetorno() {
        Assertions.assertTrue(true);
    }

    @AfterAll
    static void finalizarConexao() {
        BancoDeDados.finalizarConecao();
        System.out.println("rodou finalizarConexao");
    }
}