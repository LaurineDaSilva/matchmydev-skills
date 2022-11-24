import BaseComponent from "./BaseComponent.js"

export default class CategoryFormComponent extends BaseComponent {
    constructor(){
        super("#main");
    }
    
    template(){
        return `
        <h1 id="h1">${this.msg.categoryForm.h1}</h1>
            <div class="middle">
                <form class="col-12 col-md-6 mx-auto" id="form">
                    <div class="mb-3">
                        <label for="category-name" class="form-label">${this.msg.categoryForm.name.label}</label>
                        <input type="text" id="category-name" class="form-control" name="category-name" required minlength="1" maxlength="100" oninvalid="this.setCustomValidity('Required field.')"
                        oninput="this.setCustomValidity('')">
                        <p class="form-text">${this.msg.categoryForm.name.helpText}</p>
                    </div>

                    <div class="mb-3">
                        <p class="form-label">${this.msg.categoryForm.kind.label}</p>
                        <select class="form-select" required oninvalid="this.setCustomValidity('Required field.')"
                        oninput="this.setCustomValidity('')">
                            <option value="" selected>${this.msg.categoryForm.kind.valueDefault}</option>
                            <option value="1">${this.msg.categoryForm.kind.value1}</option>
                            <option value="2">${this.msg.categoryForm.kind.value2}</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="category-color" class="form-label">${this.msg.categoryForm.color.label}</label>
                        <div class="input-group">
                            <input type="text" id="category-color-field" class="form-control w-75" name="category-color" required minlength="1" maxlength="8" oninvalid="this.setCustomValidity('Required field.')"
                            oninput="this.setCustomValidity('')">
                            <input type="color" id="category-color-button" class="form-control form-control-color w-25" name="category-color"  value= "#FF0000" required>
                        </div>
                            <p class="form-text">${this.msg.categoryForm.color.helpText}</p>
                    </div>              

                    <div class="mb-3">
                        <input type="submit" class="btn btn-outline-dark col-12 col-md-3 offset-md-9" value="Create"/>
                    </div>
                </form>
            </div>`;
    }
    
    logic(){

        //search my id:"category-color-button"
        const button = document.getElementById("category-color-button");
        
        //search my id:"category-color-field"
        const field = document.getElementById("category-color-field");

         // *****addEventListener for input color and input text of form    
        button.addEventListener("change", CategoryForm.colorPicker()); 
        
        field.addEventListener("change", CategoryForm.colorField());
    }

    static colorPicker(){
        // console.log(button.value); 
        this.field.value = button.value;
    }
    static colorField(){
        // console.log(field.value);   
        this.button.value = field.value;
    }
}