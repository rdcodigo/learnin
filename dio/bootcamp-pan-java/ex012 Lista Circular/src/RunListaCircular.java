public class RunListaCircular {

    public static void main(String args[]){

        System.out.println("---------------------");

        ListaCircular<String> minhaListaCircular = new ListaCircular<>();

        minhaListaCircular.add("c0");
        System.out.println(minhaListaCircular);

        System.out.println("---------------------");

        minhaListaCircular.remove(0);
        System.out.println(minhaListaCircular);

        System.out.println("---------------------");

        minhaListaCircular.add("c1");
        System.out.println(minhaListaCircular);

        System.out.println("---------------------");

        minhaListaCircular.add("c2");
        minhaListaCircular.add("c3");
        System.out.println(minhaListaCircular);

        System.out.println("---------------------");

        System.out.println(minhaListaCircular.get(7));

        System.out.println("---------------------");
        
        System.out.println(minhaListaCircular.get(323));

    }

}