import { } from "";

export default class Unauthorized extends BaseComponent {

    constructor() {
        super("#main");
    }

    template() {
        return `
            <h1>Error 401 - Unauthorized</h1>
            <img src="" alt="" class="img-fluid">
        `;
    }
}
