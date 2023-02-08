package co.simplon.matchmydev.skills.dtos;

import javax.validation.constraints.NotEmpty;

public class CategoryCreateDto {

    @NotEmpty
    private String name;

    @NotEmpty
    private String color;

    private Long kindId;

    public CategoryCreateDto() {
	super();
    }

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

    public String getColor() {
	return color;
    }

    public void setColor(String color) {
	this.color = color;
    }

    public Long getKindId() {
	return kindId;
    }

    public void setKindId(Long kindId) {
	this.kindId = kindId;
    }

    @Override
    public String toString() {
	return "CategoryCreateDto [name=" + name + ", color=" + color
		+ ", kindId=" + kindId + "]";
    }

}
