package co.simplon.matchmydev.skills.dtos;

import java.util.Collection;

public class CategoryListsDto {

    private Collection<LabelValueDto> hardSkillIds;

    private Collection<LabelValueDto> softSkillIds;

    public CategoryListsDto() {
	// TODO Auto-generated constructor stub
    }

    public Collection<LabelValueDto> getHardSkillIds() {
	return hardSkillIds;
    }

    public void setHardSkillIds(Collection<LabelValueDto> hardSkillIds) {
	this.hardSkillIds = hardSkillIds;
    }

    public Collection<LabelValueDto> getSoftSkillIds() {
	return softSkillIds;
    }

    public void setSoftSkillIds(Collection<LabelValueDto> softSkillIds) {
	this.softSkillIds = softSkillIds;
    }

}
