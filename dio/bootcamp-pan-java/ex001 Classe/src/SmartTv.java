public class SmartTv {
    boolean ligada = false;
    int canal = 1;
    int volume = 25;

    public void ligar(){
        ligada = true;
    }

    public void desligar(){
        ligada = false;
    }

    public void mudarCanal(int canal) {
        this.canal = canal;
    }
    
    public void passarCanal(){
        ++canal;
    }

    public void voltarCanal(){
        --canal;
    }

    public void aumentarVolume(){
        ++volume;
    }

    public void baixarVolume(){
        --volume;
    }
}