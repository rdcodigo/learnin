package WebApi.controlador;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeControlador {
    @GetMapping
    public String welcome(){
        return "Bem vindo a minha Web Api Spring Boot";
    }
}
