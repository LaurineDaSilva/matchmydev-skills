package co.simplon.matchmydev.skills.services;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import co.simplon.matchmydev.skills.dtos.CategoryCreateDto;
import co.simplon.matchmydev.skills.entities.Category;
import co.simplon.matchmydev.skills.repositories.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {

    private CategoryRepository categories;

    public CategoryServiceImpl(CategoryRepository categories) {
	this.categories = categories;
    }

    @Override
    public void create(@Valid CategoryCreateDto inputs) {
	Category category = new Category();
	category.setName(inputs.getName());
	category.setKind(inputs.getKind());
	category.setColor(inputs.getColor());
	// DatabaseCategory.saveCategory(category);
	System.out.println(category);

	this.categories.save(category);
    }

}
