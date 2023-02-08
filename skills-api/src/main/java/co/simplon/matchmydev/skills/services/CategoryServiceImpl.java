package co.simplon.matchmydev.skills.services;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import co.simplon.matchmydev.skills.dtos.CategoryCreateDto;
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

}
