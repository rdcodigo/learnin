public class RunFila {

    public static void main(String[] args){

        Fila minhaFila = new Fila();

        minhaFila.enqueue(new NoFila("primeiro"));
        minhaFila.enqueue(new NoFila("segundo"));
        minhaFila.enqueue(new NoFila("terceiro"));
        minhaFila.enqueue(new NoFila("quarto"));

        System.out.println(minhaFila);

        System.out.println(minhaFila.dequeue());

        System.out.println(minhaFila);

        minhaFila.enqueue(new NoFila("ultimo"));

        System.out.println(minhaFila);

        System.out.println(minhaFila.first());

        System.out.println(minhaFila);
    }

}