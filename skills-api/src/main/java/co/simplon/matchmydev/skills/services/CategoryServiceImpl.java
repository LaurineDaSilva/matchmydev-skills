package co.simplon.matchmydev.skills.services;

import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import co.simplon.matchmydev.skills.dtos.CategoryCreateDto;
import co.simplon.matchmydev.skills.dtos.CategoryUpdateDto;
import co.simplon.matchmydev.skills.dtos.CategoryView;
import co.simplon.matchmydev.skills.entities.Category;
import co.simplon.matchmydev.skills.entities.Kind;
import co.simplon.matchmydev.skills.repositories.CategoryRepository;
import co.simplon.matchmydev.skills.repositories.KindRepository;

@Service
public class CategoryServiceImpl implements CategoryService {

    private CategoryRepository categories;
    private KindRepository kinds;

    public CategoryServiceImpl(CategoryRepository categories,
	    KindRepository kinds) {
	this.categories = categories;
	this.kinds = kinds;
    }

    @Override
    public void create(@Valid CategoryCreateDto inputs) {
	Category category = new Category();
	category.setName(inputs.getName());
//	category.setKind(inputs.getKind());
	category.setColor(inputs.getColor());
	Long kindId = inputs.getKindId();
	Kind kind = kinds.getReferenceById(kindId);
	category.setKind(kind);
	// DatabaseCategory.saveCategory(category);
	System.out.println(category);

	this.categories.save(category);
    }

    @Override
    public void update(CategoryUpdateDto inputs, Long id) {
	Category entity = categories.findById(id).get();
	entity.setName(inputs.getName());
	entity.setColor(inputs.getColor());
	Long kindId = inputs.getKindId();
	Kind kind = null;
	kind = kinds.getReferenceById(kindId);
	entity.setKind(kind);
	categories.save(entity);
    }

    @Override
    public Optional<CategoryView> getOne(Long id) {

	return categories.findProjectedById(id);
    }

    @Override
    public Collection<CategoryView> getAll() {
	return categories.findAllProjectedBy();
    }

}
