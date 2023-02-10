package co.simplon.matchmydev.skills.dtos;

public class CategoryUpdateDto {
    private Long id;
    private String name;
    private Long kindId;
    private String color;

    public CategoryUpdateDto() {
	super();
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

    public Long getKindId() {
	return kindId;
    }

    public void setKindId(Long kindId) {
	this.kindId = kindId;
    }

    public String getColor() {
	return color;
    }

    public void setColor(String color) {
	this.color = color;
    }

    @Override
    public String toString() {
	return "CategoryUpdateDto [id=" + id + ", name=" + name + ", kindId="
		+ kindId + ", color=" + color + "]";
    }

}