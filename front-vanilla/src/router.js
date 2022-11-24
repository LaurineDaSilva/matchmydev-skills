import HeaderComponent from "./components/HeaderComponent.js";
import CategoryFormComponent from "./components/CategoryFormComponent.js";
import SkillFormComponent from "./components/SkillFormComponent.js";
import CategorySearchComponent from "./components/CategorySearchComponent.js";

export default class Router {

    static init() {
        const headerComponent = new HeaderComponent();
        Router.route();
        headerComponent.render();
    }

    static route(event) {
        const hash = window.location.hash;
        let component = null;
        if (hash == "#/category-form" || hash == "") {
            component = new CategoryFormComponent;
        } else if (hash == "#/skill-form") {
            component = new SkillFormComponent();
        }else if (hash == "#/category-list") {
            component = new CategorySearchComponent;
        }
        component.render();
    }
}