package it.epicode.dischi.common;

import com.github.javafaker.Faker;
import it.epicode.dischi.cantanti.Cantante;
import it.epicode.dischi.cantanti.CantanteRepository;
import it.epicode.dischi.cantanti.CantanteResponse;
import it.epicode.dischi.canzoni.Canzone;
import it.epicode.dischi.canzoni.CanzoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CommonRunner implements CommandLineRunner {
    @Autowired
    private CantanteRepository cantanteRepository;
    @Autowired
    private CanzoneRepository canzoneRepository;
    @Autowired
    private Faker faker;


    @Override
    public void run(String... args) throws Exception {

        for (int i = 0; i < 100; i++) {
            Cantante cantante = new Cantante();
            cantante.setNome(faker.name().firstName());
            cantante.setCognome(faker.name().lastName());
            cantanteRepository.save(cantante);

            Canzone canzone = new Canzone();
            canzone.setTitolo(faker.book().title());
            canzone.setGenere(faker.book().genre());
            canzone.setCantante(cantante);
            canzoneRepository.save(canzone);


        }


    }
}
