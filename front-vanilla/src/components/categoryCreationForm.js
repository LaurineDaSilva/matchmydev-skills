import { messages } from "../messages.js";

function renderCategoryCreationForm() {
    const categoryCreationFormContent = `
        <div class="mb-3">
            <label for="category-name" class="form-label">${messages.categoryCreationForm.name.label}</label>
            <input type="text" id="category-name" class="form-control" name="category-name" required minlength="1" maxlength="100">
            <p class="form-text">${messages.categoryCreationForm.name.helpText}</p>
        </div>

        <div class="mb-3">
            <p class="form-label">${messages.categoryCreationForm.kind.label}</p>
            <select class="form-select" required>
                <option value="" selected>${messages.categoryCreationForm.kind.valueDefault}</option>
                <option value="1">${messages.categoryCreationForm.kind.value1}</option>
                <option value="2">${messages.categoryCreationForm.kind.value2}</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="category-color" class="form-label">${messages.categoryCreationForm.color.label}</label>
            <div class="input-group">
                <input type="text" id="category-color-field" class="form-control w-75" name="category-color" required minlength="1" maxlength="8">
                <input type="color" id="category-color-button" class="form-control form-control-color w-25" name="category-color"  value= "#FF0000" required>
            </div>
                <p class="form-text">${messages.categoryCreationForm.color.helpText}</p>
        </div>              

        <div class="mb-3">
            <input type="submit" class="btn btn-outline-dark col-12 col-md-3 offset-md-9" value="Create"/>
        </div>`
    ;

    const form = document.getElementById("form");
    form.innerHTML = categoryCreationFormContent;

    
    // *****addEventListener for input color and input text of form

    const button = document.getElementById("category-color-button");
    //search my id:"category-color-button"
    
    const field = document.getElementById("category-color-field");
    //search my id:"category-color-field"
    
    
    button.addEventListener("change", colorPicker); 
    
    function colorPicker(){
        // console.log(button.value); 
        field.value = button.value;
    }
    
    field.addEventListener("change", colorField);
    
    function colorField(){
        // console.log(field.value);   
        button.value = field.value;
    }
}

export { renderCategoryCreationForm };