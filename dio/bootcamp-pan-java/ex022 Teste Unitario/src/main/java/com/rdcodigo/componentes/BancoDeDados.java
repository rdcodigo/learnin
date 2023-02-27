package com.rdcodigo.componentes;

import java.util.logging.Logger;

public class BancoDeDados {
    private static final Logger LOGGER = Logger.getLogger(BancoDeDados.class.getName());

    public static void iniciarConecao(){
        //fez algo
        LOGGER.info("Iniciou conexao");
    }

    public static void finalizarConecao(){
        //fez algo
        LOGGER.info("Finalizou conexao");
    }

    public static void insereDados(Pessoa pessoa){
        //Insere dados no banco de dados
        LOGGER.info("Inseriu os dados no banco de dados");
    }

    public static void removeDados(Pessoa pessoa){
        //Remove dados no banco de dados
        LOGGER.info("Removeu os dados do banco de dados");
    }
}
