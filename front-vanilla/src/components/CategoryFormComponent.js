import BaseFormComponent from "./BaseFormComponent.js"

export default class CategoryFormComponent extends BaseFormComponent {
    constructor(){
        super("#main", {
            url:"http://localhost:8080/categories",
            method: "POST"
        })
    }

    async dataModel() {
        return{
            name:"",
            kind:"",
            color:"#FF0000",
        }
    }

    template(){
        return `
        <h1 id="h1">${this.msg.categoryForm.h1}</h1>
            <div class="middle">
                <form class="col-12 col-md-6 mx-auto" id="form">
                    <div class="mb-3">
                        <label for="name" class="form-label">${this.msg.categoryForm.name.label}</label>
                        <input type="text" id="name" class="form-control" name="name" required minlength="1" maxlength="100">
                        <p class="form-text">${this.msg.categoryForm.name.helpText}</p>
                    </div>

                    <div class="mb-3">
                        <label for="kind" class="form-label">${this.msg.categoryForm.kind.label}</label for="kind">
                        <select class="form-select" name="kind" required>
                            <option value="" selected>${this.msg.categoryForm.kind.valueDefault}</option>
                            <option value="Hard skills">${this.msg.categoryForm.kind.value1}</option>
                            <option value="Soft skills">${this.msg.categoryForm.kind.value2}</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="color" class="form-label">${this.msg.categoryForm.color.label}</label>
                        <div class="input-group">
                            <input type="text" id="color-field" class="form-control w-75" name="color" value= "#FF0000" minlength="1" maxlength="8" required>
                            <input type="color" id="color-button" class="form-control form-control-color w-25" name="color-button"  value= "#FF0000" >
                        </div>
                            <p class="form-text">${this.msg.categoryForm.color.helpText}</p>
                    </div>              

                    <div class="mb-3">
                        <button type="submit" class="btn btn-outline-dark col-12 col-md-3 offset-md-9">Create</button>
                    </div>
                </form>
            </div>`;
    }
    
    render(){
        super.render();
        this.logic();
    }
    logic(){

        //search my id:"color-button"
        const button = document.getElementById("color-button");
        
        //search my id:"color-field"
        const field = document.getElementById("color-field");

         // *****addEventListener for input color and input text of form    
        button.addEventListener("change", ()=>{field.value =button.value} ); 
        
        field.addEventListener("change", ()=>{button.value = field.value} );
    }

}