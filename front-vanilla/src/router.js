import HeaderComponent from "./components/HeaderComponent.js";
import CategoryFormComponent from "./components/CategoryFormComponent.js";
import CategorySearchComponent from "./components/CategorySearchComponent.js";

export default class Router {

    static init() {
        const headerComponent = new HeaderComponent();
        headerComponent.render();
        const categoryForm = new CategoryFormComponent;
        categoryForm.render();
        const categorySearchComponent = new CategorySearchComponent;
        categorySearchComponent.render();
    }
}