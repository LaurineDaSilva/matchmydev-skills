package co.simplon.matchmydev.skills.repositories;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import co.simplon.matchmydev.skills.dtos.KindView;
import co.simplon.matchmydev.skills.entities.Kind;

public interface KindRepository extends JpaRepository<Kind, Long> {

//    Collection<KindView> findAllProjectedBy();
    Collection<KindView> findByOrderByNameAsc();
}
