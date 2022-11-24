package co.simplon.matchmydev.skills.dtos;

public class CategoryView {
    private Long id;
    private String name;
    private String kind;
    private String color;
    private String createdBy;
    private String lastUpdatedBy;

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

    public String getCreatedBy() {
	return createdBy;
    }

    public void setCreatedBy(String createdBy) {
	this.createdBy = createdBy;
    }

    public String getLastUpdatedBy() {
	return lastUpdatedBy;
    }

    public void setLastUpdatedBy(String lastUpdatedBy) {
	this.lastUpdatedBy = lastUpdatedBy;
    }

    @Override
    public String toString() {
	return "{id=" + id + ", name=" + name + ", kind=" + kind + ", color="
		+ color + ", createdBy=" + createdBy + ", lastUpdatedBy="
		+ lastUpdatedBy + "}";
    }

}
