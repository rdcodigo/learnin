package componentes;

public class NoListaEncadeada<T> {
    private T conteudo;
    private NoListaEncadeada proximoNo = null;

    public NoListaEncadeada(T conteudo){
        this.conteudo = conteudo;
    }

    public NoListaEncadeada(T conteudo, No proximoNo) {
        this.conteudo = conteudo;
        this.proximoNo = proximoNo;
    }

    public T getConteudo() {
        return conteudo;
    }

    public void setConteudo(T conteudo) {
        this.conteudo = conteudo;
    }

    public NoListaEncadeada getProximoNo() {
        return proximoNo;
    }

    public void setProximoNo(NoListaEncadeada proximoNo) {
        this.proximoNo = proximoNo;
    }

    @Override
    public String toString() {
        return "No{" + conteudo + '}';
    }

    public String toStringEncadeado() {
        String str = "No{" + conteudo + "}";

        if(proximoNo != null){
            str += "->" + proximoNo.toString();
        }else{
            str += "->null";
        }
        return str;
    }
}
