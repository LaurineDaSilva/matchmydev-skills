package co.simplon.matchmydev.skills.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import co.simplon.matchmydev.skills.entities.Kind;

public interface KindRepository extends JpaRepository<Kind, Long> {

}
