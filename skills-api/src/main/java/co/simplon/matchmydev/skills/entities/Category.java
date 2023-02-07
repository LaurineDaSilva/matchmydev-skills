package co.simplon.matchmydev.skills.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "categories")

public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "color")
    private String color;

    @JoinColumn(name = "kind_id")
    // one kind to many categories
    // many categories to one kind
    @ManyToOne
    private Kind kind;

    public long getId() {
	return id;
    }

    public void setId(long id) {
	this.id = id;
    }

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

//    public String getKind() {
//	return kind;
//    }
//
//    public void setKind(String kind) {
//	this.kind = kind;
//    }

    public String getColor() {
	return color;
    }

    public void setColor(String color) {
	this.color = color;
    }

    public Kind getKind() {
	return kind;
    }

    public void setKind(Kind kind) {
	this.kind = kind;
    }

    @Override
    public String toString() {
	return "{id=" + id + ", name=" + name + ", kind=" + kind + ", color="
		+ color + "}";
    }

}
