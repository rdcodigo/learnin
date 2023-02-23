package componentes;
public class NoFila<T> {
    private T object;
    private NoFila<T> refNoFila;

    public NoFila(){
    }

    public NoFila(T object){
        this.refNoFila = null;
        this.object = object;
    }

    public Object getObject() {
        return object;
    }

    public void setObject(T object) {
        this.object = object;
    }

    public NoFila getRefNoFila() {
        return refNoFila;
    }

    public void setRefNoFila(NoFila<T> refNoFila) {
        this.refNoFila = refNoFila;
    }

    @Override
    public String toString() {
        return "No{" +
                "object=" + object +
                '}';
    }
}
