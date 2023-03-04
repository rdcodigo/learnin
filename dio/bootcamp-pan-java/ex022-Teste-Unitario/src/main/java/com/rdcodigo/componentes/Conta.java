package com.rdcodigo.componentes;

public class Conta {
    private int numeroConta;
    private float saldo;
    
    public int getNumeroConta() {
        return numeroConta;
    }
    public void setNumeroConta(int numeroConta) {
        this.numeroConta = numeroConta;
    }
    public float getSaldo() {
        return saldo;
    }
    public void setSaldo(float saldo) {
        this.saldo = saldo;
    }
    public Conta(int numeroConta, float saldo) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }    
}
