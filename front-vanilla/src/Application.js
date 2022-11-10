
import CategoryFormComponent from "./components/CategoryFormComponent.js";
import Messages  from "./Messages.js";


class Application {
    static async main() {
        await Messages.init();
        //Router.init(); pour l'instant non utilisation du Router
        const categoryForm = new CategoryFormComponent;
        categoryForm.render();
    }
}

Application.main();