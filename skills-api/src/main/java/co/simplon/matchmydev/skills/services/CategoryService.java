package co.simplon.matchmydev.skills.services;

import java.util.Collection;
import java.util.Optional;

import co.simplon.matchmydev.skills.dtos.CategoryCreateDto;
import co.simplon.matchmydev.skills.dtos.CategoryUpdateDto;
import co.simplon.matchmydev.skills.dtos.CategoryView;

public interface CategoryService {

    void create(CategoryCreateDto inputs);

    void update(CategoryUpdateDto inputs, Long id);

    Optional<CategoryView> getOne(Long id);

    Collection<CategoryView> getAll();

//    void delete(Long id);
}
