package co.simplon.matchmydev.skills.dtos;

import javax.validation.constraints.NotEmpty;

public class CategoryCreateDto {

    @NotEmpty
    private String name;

    @NotEmpty
    private String kind;

    @NotEmpty
    private String color;

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

    public String getKind() {
	return kind;
    }

    public void setKind(String kind) {
	this.kind = kind;
    }

    public String getColor() {
	return color;
    }

    public void setColor(String color) {
	this.color = color;
    }

    @Override
    public String toString() {
	return "CategoryCreateDto [name=" + name + ", kind=" + kind + ", color="
		+ color + "]";
    }

}
