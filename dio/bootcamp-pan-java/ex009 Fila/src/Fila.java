public class Fila {

    private NoFila refNoEntradaFila;

    public Fila() {
        this.refNoEntradaFila = null;
    }

    public void enqueue(NoFila novoNo){
        novoNo.setRefNoFila(refNoEntradaFila);
        refNoEntradaFila = novoNo;
    }

    public NoFila first(){
        if(!this.isEmpty()){
            NoFila primeiroNo = refNoEntradaFila;
            while (true){
                if(primeiroNo.getRefNoFila() != null){
                    primeiroNo = primeiroNo.getRefNoFila();
                }else{
                    break;
                }
            }
            return primeiroNo;
        }
        return null;
    }

    public NoFila dequeue(){
        if(!this.isEmpty()){
            NoFila primeiroNo = refNoEntradaFila;
            NoFila noAuxiliar = refNoEntradaFila;
            while (true){
                if(primeiroNo.getRefNoFila() != null){
                    noAuxiliar = primeiroNo;
                    primeiroNo = primeiroNo.getRefNoFila();
                }else{
                    noAuxiliar.setRefNoFila(null);
                    break;
                }
            }
            return primeiroNo;
        }
        return null;
    }

    public boolean isEmpty(){
        return refNoEntradaFila == null? true : false;
    }

    @Override
    public String toString() {
        String stringRetorno = "";
        NoFila noAuxiliar = refNoEntradaFila;

        if(refNoEntradaFila != null){
            while (true){
                stringRetorno += "[No{objeto=" + noAuxiliar.getObject() + "}]--->";
                if(noAuxiliar.getRefNoFila() != null){
                    noAuxiliar = noAuxiliar.getRefNoFila();
                }else{
                    stringRetorno += "null";
                    break;
                }
            }
        }else{
            stringRetorno = "null";
        }
        return stringRetorno;
    }
}