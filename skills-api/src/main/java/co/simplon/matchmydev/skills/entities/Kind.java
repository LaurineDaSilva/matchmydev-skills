package co.simplon.matchmydev.skills.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "kinds")
public class Kind extends AbstractEntity {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id")
//    private Long id;

    @Column(name = "name", updatable = false)
    private String name;

    public Kind() {

    }

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

    @Override
    public String toString() {
	return "Kind [name=" + name + "]";
    }

}
