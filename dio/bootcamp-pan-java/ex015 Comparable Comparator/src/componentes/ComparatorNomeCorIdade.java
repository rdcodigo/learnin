package componentes;

import java.util.Comparator;

public class ComparatorNomeCorIdade implements Comparator<Gato> {

    @Override
    public int compare(Gato o1, Gato o2) {
        // TODO Auto-generated method stub

        int nome = o1.getNome().compareToIgnoreCase(o2.getNome());
        if (nome != 0) return nome;

        int cor = o1.getCor().compareToIgnoreCase(o2.getCor());
        if(cor !=0) return cor;

        return Integer.compare(o1.getIdade(), o2.getIdade());
    }
    
}
