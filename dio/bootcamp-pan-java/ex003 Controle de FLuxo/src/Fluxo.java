import java.util.Locale;
import java.util.Scanner;

public class Fluxo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in).useLocale(Locale.US);
        System.out.println("Digite o nome do mes sem acentos:");
        String mesDoAno = scan.next();

        numMesDoAno(mesDoAno);
    }

    public static void numMesDoAno(String mesDoAno) {
        switch (mesDoAno) {
            case "janeiro":
                System.out.println("Mes 1");
                break;
            case "fevereiro":
                System.out.println("Mes 2");
                break;
            case "marco":
                System.out.println("Mes 3");
                break;
            case "abril":
                System.out.println("Mes 4");
                break;
            case "maio":
                System.out.println("Mes 5");
                break;
            case "junho":
                System.out.println("Mes 6");
                break;
            case "julho":
                System.out.println("Mes 7");
                break;
            case "agosto":
                System.out.println("Mes 8");
                break;
            case "setembro":
                System.out.println("Mes 9");
                break;
            case "outubro":
                System.out.println("Mes 10");
                break;
            case "novembro":
                System.out.println("Mes 11");
                break;
            case "dezembro":
                System.out.println("Mes 12");
                break;
            default:
                System.out.println("Mes inválido");
                break;
        }

        if (mesDoAno == "junho" || mesDoAno == "dezembro" || mesDoAno == "janeiro") {
            System.out.println("Mes de ferias");
        } else {
            System.out.println("Mes de trabalho");
        }
    }
}
