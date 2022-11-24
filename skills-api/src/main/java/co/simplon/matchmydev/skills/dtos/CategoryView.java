package co.simplon.matchmydev.skills.dtos;

public class CategoryView {
    private Long id;
    private String name;
    private String kind;
    private String color;

    public CategoryView() {

    }

    public Long getId() {
	return id;
    }

    public void setId(Long id) {
	this.id = id;
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
	return "CategoryView [id=" + id + ", name=" + name + ", kind=" + kind
		+ ", color=" + color + "]";
    }

}
