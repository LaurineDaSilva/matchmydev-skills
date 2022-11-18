import Messages  from "./Messages.js";
import Router from "./router.js";


class Application {
    static async main() {
        await Messages.init();
        //Router.init(); pour l'instant non utilisation du Router
        Router.init();
    }
}

Application.main();