public class RunGenerics {

    public static void main(String[] args){
        NoGenerics<String> no1 = new NoGenerics<String>("Conteúdo no1");
        //Tentar setar o conteúdo como string
        NoGenerics<String> no2 = new NoGenerics<>("Conteúdo no2");
        no1.setProximoNo(no2);

        NoGenerics<String> no3 = new NoGenerics("Conteúdo no3");
        no2.setProximoNo(no3);

        NoGenerics<String> no4 = new NoGenerics("Conteúdo no4");
        no3.setProximoNo(no4);

        System.out.println(no1.toStringEncadeado());
        System.out.println(no2.toStringEncadeado());
        System.out.println(no3.toStringEncadeado());
        System.out.println(no4.toStringEncadeado());
    }

}