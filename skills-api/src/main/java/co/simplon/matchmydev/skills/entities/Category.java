package co.simplon.matchmydev.skills.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "categories")

public class Category extends AbstractEntity {

// SUPPRESSION DE L'ID car héritage de AbstractEntity
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id")
//    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "color")
    private String color;

    @JoinColumn(name = "kind_id")
    // one kind to many categories
    // many categories to one kind
    @ManyToOne
    private Kind kind;

    // SUPPRESSION DES GETTERS/SETTERS car héritage de AbstractEntity
//    public Long getId() {
//	return id;
//    }
//
//    public void setId(Long id) {
//	this.id = id;
//    }

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

    public Kind getKind() {
	return kind;
    }

    public void setKind(Kind kind) {
	this.kind = kind;
    }

    @Override
    public String toString() {
	return "Category [name=" + name + ", color=" + color + ", kind=" + kind
		+ "]";
    }

}
