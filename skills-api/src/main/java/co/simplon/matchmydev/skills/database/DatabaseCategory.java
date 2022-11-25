package co.simplon.matchmydev.skills.database;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import co.simplon.matchmydev.skills.entities.Category;

public class DatabaseCategory {
    private static Long categoryId = 0L;

    private static final Map<Long, Category> CATEGORIES = new HashMap<>();

    public static void saveCategory(Category category) {
	categoryId++;
	category.setId(categoryId);
	CATEGORIES.put(categoryId, category);
    }

    public static Collection<Category> findAll() {
	return CATEGORIES.values();
    }

    public static Collection<Category> findHardSkills() {
	return filterByKind("Hard skills");
    }

    public static Collection<Category> findSoftSkills() {
	return filterByKind("Soft skills");
    }

    private static Collection<Category> filterByKind(String kind) {
	Collection<Category> all = findAll();
	Collection<Category> filtered = new ArrayList<>();
	for (Category category : all) {
	    if (category.getKind().equals(kind)) {
		filtered.add(category);
	    }
	}
	return filtered;
    }
}
