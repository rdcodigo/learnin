package principal;
import componentes.SmartTv;

public class App {
    public static void main(String[] args) throws Exception {
        SmartTv smartTv = new SmartTv();

        System.out.println("TV ligada? " + smartTv.ligada);
        System.out.println("Canal atual: " + smartTv.canal);
        System.out.println("Volume atual: " + smartTv.volume);

        smartTv.ligar();
        System.out.println("TV ligada? " + smartTv.ligada);

        smartTv.desligar();
        System.out.println("TV ligada? " + smartTv.ligada);

        smartTv.passarCanal();
        smartTv.passarCanal();
        System.out.println("Canal atual: " + smartTv.canal);
        smartTv.voltarCanal();
        System.out.println("Canal atual: " + smartTv.canal);


        smartTv.aumentarVolume();
        smartTv.aumentarVolume();
        smartTv.aumentarVolume();
        smartTv.aumentarVolume();
        smartTv.aumentarVolume();
        System.out.println("Volume atual: " + smartTv.volume);
        smartTv.baixarVolume();
        System.out.println("Volume atual: " + smartTv.volume);

        smartTv.mudarCanal(22);
        System.out.println("Canal atual: " + smartTv.canal);
    }
}