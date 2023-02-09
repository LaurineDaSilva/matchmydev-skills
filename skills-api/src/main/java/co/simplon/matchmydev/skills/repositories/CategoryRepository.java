package co.simplon.matchmydev.skills.repositories;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import co.simplon.matchmydev.skills.dtos.CategoryView;
import co.simplon.matchmydev.skills.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Collection<CategoryView> findAllProjectedBy();

}
