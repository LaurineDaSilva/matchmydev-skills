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
        <h1>Search for a skill category</h1>
        <form class="mb-3 mt-4">
            <label for="name" class="form-label">Skill category name</label>
            <div class="input-group">
                <input id="name" name="name" type="text" class="form-control" required/>
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <button class="btn btn-outline-dark" type="submit">Search</button>
            </div>
            <p class="form-text">Please enter part of or full name of the skill category, will find any match containing input text.</p>   
        </form>        
        <h2>Categories</h2>
        <div class=" w-100 table-responsive-lg">
            <table class="table table-bordered table-hover">
                <thead class="table-labels-background">
                    <th scope="col" class="col">Name</th>
                    <th scope="col" class="col">Kind</th>
                    <th scope="col" class="col">Color</th>
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