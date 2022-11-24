import BaseComponent from "./BaseComponent.js"

export default class SkillFormComponent extends BaseComponent {
    constructor(){
        super("#main");
    }
    
    template(){
        return `
        <h1>Create a skill</h1>
                <div class="middle">
                    <form class="col-12 col-md-8 mx-auto">
                        <div class="skill-name-inputs row">
                            <div class="mb-3 col-12 col-md-6">
                                <label for="full-name" class="form-label">Full name</label>
                                <input type="text" id="full-name" class="form-control" name="full-name" required minlength="1" maxlength="100" oninvalid="this.setCustomValidity('Required field.')"
                                oninput="this.setCustomValidity('')">
                                <p class="form-text">Text with a maximum of 100 chars.</p>
                            </div>
                
                            <div class="mb-3 col-12 col-md-6">
                                <label for="short-name" class="form-label">Short name</label>
                                <input type="text" id="short-name" class="form-control" name="short-name" required minlength="1" maxlength="100" oninvalid="this.setCustomValidity('Required field.')"
                                oninput="this.setCustomValidity('')">
                                <p class="form-text">Text with a maximum of 100 chars.</p>
                            </div>
                        </div>
            
                        <div class="mb-3">
                            <label for="categories" class="form-label">Categories</label>
                            <p class="form-text">Text with a maximum of 100 chars.</p>
                            <div class="row  " >
                                <div class="col-md-6 ">
                                    <label for="categories-hard-skills" class="form-label small">Select hard skills</label>
                                    <select class="form-select mb-2 form-select-categories" id="categories-hard-skills" name="categories" required multiple oninvalid="this.setCustomValidity('Required field.')"
                                    oninput="this.setCustomValidity('')">
                                        <option value="1">Hard skills</option>
                                        <option value="2">Soft skills</option>
                                        <option value="1">Hard skills</option>
                                        <option value="2">Soft skills</option>
                                        <option value="1">Hard skills</option>
                                        <option value="2">Soft skills</option>
                                        <option value="1">Hard skills</option>
                                        <option value="2">Soft skills</option>
                                        <option value="1">Hard skills</option>
                                        <option value="2">Soft skills</option>
                                    </select>
                                </div>
                                <div class="col-md-6 ">
                                    <label for="categories-soft-skills" class="form-label small">Select soft skills</label>
                                    <select class="form-select mb-2 form-select-categories" id="categories-soft-skills" name="categories" required multiple oninvalid="this.setCustomValidity('Required field.')"
                                    oninput="this.setCustomValidity('')">
                                        <option value="1">Hard skills</option>
                                        <option value="2">Soft skills</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <button type="submit" class="btn btn-outline-dark col-12 col-md-3 offset-md-9">Create</button>
                        </div>
                    </form>
                </div>`;
    }
}