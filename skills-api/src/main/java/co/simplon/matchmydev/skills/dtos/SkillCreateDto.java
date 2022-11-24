package co.simplon.matchmydev.skills.dtos;

public class SkillCreateDto {
    private String fullName;
    private String shortName;

    public SkillCreateDto() {
	super();
    }

    public String getFullName() {
	return fullName;
    }

    public void setFullName(String fullName) {
	this.fullName = fullName;
    }

    public String getShortName() {
	return shortName;
    }

    public void setShortName(String shortName) {
	this.shortName = shortName;
    }

    @Override
    public String toString() {
	return "SkillCreateDto [fullName=" + fullName + ", shortName="
		+ shortName + "]";
    }

}
