package co.simplon.matchmydev.skills.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.matchmydev.skills.database.DatabaseSkill;
import co.simplon.matchmydev.skills.dtos.SkillCreateDto;
import co.simplon.matchmydev.skills.entities.Skill;

@RestController
@RequestMapping("/skills")
@CrossOrigin
public class SkillController {

    @PostMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void create(@RequestBody SkillCreateDto inputs) {
	Skill skill = new Skill();
	skill.setFullName(inputs.getFullName());
	skill.setShortName(inputs.getShortName());
	DatabaseSkill.saveSkill(skill);
	System.out.println(skill);
    }

}
