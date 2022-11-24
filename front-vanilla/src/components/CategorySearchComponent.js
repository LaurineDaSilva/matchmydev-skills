import BaseIterableComponent from "./BaseIterableComponent.js"

export default class CategorySearchComponent extends BaseIterableComponent{
    constructor(){
        super("main", {
            url:"http://localhost:8080/categories",
            method: "GET",
            elementsSelector: "#elements"
        });
    }

    template(){
        return `
        <h1>${this.msg.categorySearchForm.h1}</h1>
        <form class="mb-3 mt-4">
            <label for="name" class="form-label">${this.msg.categorySearchForm.label}</label>
            <div class="input-group">
                <input id="name" name="name" type="text" class="form-control" required/>
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <button class="btn btn-outline-dark" type="submit">Search</button>
            </div>
            <p class="form-text">${this.msg.categorySearchForm.helpText}</p>   
        </form>        
        <h2>${this.msg.categorySearchForm.categories.h2}</h2>
        <div class=" w-100 table-responsive-lg">
            <table class="table table-bordered table-hover">
                <thead class="table-labels-background">
                    <th scope="col" class="col">${this.msg.categorySearchForm.categories.firstColumn}</th>
                    <th scope="col" class="col">${this.msg.categorySearchForm.categories.secondColumn}</th>
                    <th scope="col" class="col">${this.msg.categorySearchForm.categories.thirdColumn}</th>
                </thead>
                <tbody id="elements">
                </tbody>
            </table>
        </div>`;
    }

    elementTemplate(element){
        return `<tr>
            <td>${element.name}</td>
            <td>${element.kind}</td>
            <td>${element.color}</td>
        </tr>
        `
    }
}