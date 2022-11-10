import Messages  from "./Messages.js";


class Application {
    static async main() {
        await Messages.init();
        //Router.init(); pour l'instant non utilisation du Router
    }
}

Application.main();