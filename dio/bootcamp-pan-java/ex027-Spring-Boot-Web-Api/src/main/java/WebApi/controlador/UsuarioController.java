package WebApi.controlador;

import WebApi.model.Usuario;
import WebApi.repositorio.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioController {
    @Autowired
    private UsuarioRepositorio repositorio;

    @PostMapping("/usuarios")
    public void post(@RequestBody Usuario usuario){
        repositorio.save(usuario);
    }
    @PutMapping("/usuarios")
    public void put(@RequestBody Usuario usuario){
        repositorio.update(usuario);
    }
    @GetMapping("/usuarios")
    public List<Usuario> getAll(){
        return repositorio.listAll();
    }
    @GetMapping("/usuario/{id}")
    public Usuario getOne(@PathVariable("id") Integer id){
        return repositorio.finById(id);
    }
    @DeleteMapping("/usuarios/{id}")
    public void delete(@PathVariable("id") Integer id){
        repositorio.remove(id);
    }
}