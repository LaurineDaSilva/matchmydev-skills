import { } from "";

export default class NotFound extends BaseComponent {

    constructor() {
        super("#main");
    }

    template() {
        return `
            <h1>Error 404 - Not Found</h1>
            <img src="" alt="" class="img-fluid">
        `;
    };

}