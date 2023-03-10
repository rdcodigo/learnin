package principal;

import componentes.Robo;
import comportamentos.Comportamento;
import comportamentos.ComportamentoAgressivo;
import comportamentos.ComportamentoDefensivo;
import comportamentos.ComportamentoNormal;

public class App {
    public static void main(String[] args) {
        Comportamento defensivo = new ComportamentoDefensivo();
		Comportamento normal = new ComportamentoNormal();
		Comportamento agressivo = new ComportamentoAgressivo();
		
		Robo robo = new Robo();
		robo.setComportamento(normal);
		robo.mover();
		robo.mover();
		robo.setComportamento(defensivo);
		robo.mover();
		robo.setComportamento(agressivo);
		robo.mover();
		robo.mover();
		robo.mover();
    }
}
