package it.epicode.libri.test;

import it.epicode.libri.Libro;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class MainInsertLibro {
    public static void main(String[] args) {

        //usiamo entity manager per inserire un libro nel db(database)
        //la persistence unit è epicode come specificato nel file persistence.xml
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("epicode");
        //creiamo un entity manager
        EntityManager em = emf.createEntityManager();

        Libro l = new Libro("Il signore degli anelli", "J.R.R. Tolkien", 1954);
        //iniziamo la transazione
        em.getTransaction().begin();
        //inseriamo il libro
        em.persist(l);
        //commit della transazione
        em.getTransaction().commit();
        //chiudiamo l'entity manager
        em.close();
        //chiudiamo l'entity manager factory

        emf.close();
    }
}
