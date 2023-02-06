package co.simplon.matchmydev.skills.controllers;

import java.util.ArrayList;
import java.util.Collection;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.matchmydev.skills.database.DatabaseCategory;
import co.simplon.matchmydev.skills.dtos.CategoryCreateDto;
import co.simplon.matchmydev.skills.dtos.CategoryListsDto;
import co.simplon.matchmydev.skills.dtos.CategoryUpdateDto;
import co.simplon.matchmydev.skills.dtos.CategoryView;
import co.simplon.matchmydev.skills.dtos.LabelValueDto;
import co.simplon.matchmydev.skills.entities.Category;
import co.simplon.matchmydev.skills.services.CategoryService;

@RestController
@RequestMapping("/categories")
@CrossOrigin
public class CategoryController {

    private CategoryService service;

    public CategoryController(CategoryService service) {
	this.service = service;
    }

    @GetMapping("/list")
    public CategoryListsDto getCategories() {
	CategoryListsDto result = new CategoryListsDto();
	result.setHardSkillIds(convert(DatabaseCategory.findHardSkills()));
	result.setSoftSkillIds(convert(DatabaseCategory.findSoftSkills()));
	return result;
    }

    private static Collection<LabelValueDto> convert(
	    Collection<Category> categories) {
	Collection<LabelValueDto> result = new ArrayList<>();
	for (Category category : categories) {
	    LabelValueDto dto = new LabelValueDto();
	    dto.setId(category.getId());
	    dto.setLabel(category.getName());
	    result.add(dto);

	}
	return result;
    }

    @GetMapping
    public Collection<CategoryView> getAll() {
	Collection<Category> categories = DatabaseCategory.findAll();
	Collection<CategoryView> views = new ArrayList<>();
	for (Category category : categories) {
	    CategoryView view = new CategoryView();
	    view.setId(category.getId());
	    view.setName(category.getName());
	    view.setKind(category.getKind());
	    view.setColor(category.getColor());
	    views.add(view);
	}
	return views;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)

    public void create(@Valid @RequestBody CategoryCreateDto inputs) {
	service.create(inputs);
    }
    // CODE AVANT
//    public void create(@RequestBody CategoryCreateDto inputs) {
//	Category category = new Category();
//	category.setName(inputs.getName());
//	category.setKind(inputs.getKind());
//	category.setColor(inputs.getColor());
//	DatabaseCategory.saveCategory(category);
//	System.out.println(category);
//    }

    @PatchMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody CategoryUpdateDto inputs,
	    @PathVariable("id") Long id) {
	System.out.println(inputs);
    }
}
