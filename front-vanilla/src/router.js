import HeaderComponent from "./components/HeaderComponent.js";
import CategoryFormComponent from "./components/CategoryFormComponent.js";
<<<<<<< HEAD
import CategorySearchComponent from "./components/CategorySearchComponent.js";
=======
import SkillFormComponent from "./components/SkillFormComponent.js";
>>>>>>> ea01435335969e238a48d51b7c4683f5cd1fc1ca

export default class Router {

    static init() {
        const headerComponent = new HeaderComponent();
        Router.route();
        headerComponent.render();
<<<<<<< HEAD
        const categoryForm = new CategoryFormComponent;
        categoryForm.render();
        const categorySearchComponent = new CategorySearchComponent;
        categorySearchComponent.render();
=======
    }

    static route(event) {
        const hash = window.location.hash;
        let component = null;
        if (hash == "#/category-form" || hash == "") {
            component = new CategoryFormComponent;
        } else if (hash == "#/skill-form") {
            component = new SkillFormComponent();
        }
        component.render();
>>>>>>> ea01435335969e238a48d51b7c4683f5cd1fc1ca
    }
}