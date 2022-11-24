package co.simplon.matchmydev.skills.database;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import co.simplon.matchmydev.skills.entities.Skill;

public class DatabaseSkill {
    private static Long skillId = 0L;

    private static final Map<Long, Skill> SKILLS = new HashMap<>();

    public static void saveSkill(Skill skill) {
	skillId++;
	skill.setId(skillId);
	SKILLS.put(skillId, skill);
    }

    public static Collection<Skill> findAll() {
	return SKILLS.values();
    }
}
