import { } from "";


export default class InternalServerError extends BaseComponent {
 
    constructor() {
        super("#main");
    }

    template() {
        return `
            <h1>Error 500 - Internal Server Error</h1>
            <img src="" alt="" class="img-fluid">
        `;
}

}