import BaseComponent from "./BaseComponent.js"

export default class CategorySearchComponent extends BaseComponent{
    constructor(){
        super("main");
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
                    <th scope="col" class="col">Created By</th>
                    <th scope="col" class="col">Last Updated By</th>
                </thead>
                <tbody>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                </tbody>
            </table>
        </div>`;
    }
}