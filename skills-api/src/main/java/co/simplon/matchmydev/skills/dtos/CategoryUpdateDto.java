package co.simplon.matchmydev.skills.dtos;

public class CategoryUpdateDto {
    private String name;
    private String kind;
    private String color;

    public CategoryUpdateDto() {
	super();
    }

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
	return "CategoryUpdateDto [name=" + name + ", kind=" + kind + ", color="
		+ color + "]";
    }

}