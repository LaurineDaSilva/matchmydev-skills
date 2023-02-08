package co.simplon.matchmydev.skills.dtos;

import co.simplon.matchmydev.skills.entities.Kind;

public interface CategoryView {
    Long getId();

    String getName();

    Kind getKind();

    String getColor();
}
