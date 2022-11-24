package co.simplon.matchmydev.skills.entities;

import java.util.ArrayList;

public class Skill {
    private Long id;
    private String fullName;
    private String shortName;
    private ArrayList<Category> categories;

    public Long getId() {
	return id;
    }

    public void setId(Long id) {
	this.id = id;
    }

    public String getFullName() {
	return fullName;
    }

    public void setFullName(String fullName) {
	this.fullName = fullName;
    }

    public String getShortName() {
	return shortName;
    }

    public void setShortName(String shortName) {
	this.shortName = shortName;
    }

    public ArrayList<Category> getCategories() {
	return categories;
    }

    public void setCategories(ArrayList<Category> categories) {
	this.categories = categories;
    }

    @Override
    public String toString() {
	return "Skill [id=" + id + ", fullName=" + fullName + ", shortName="
		+ shortName + ", categories=" + categories + "]";
    }

}
