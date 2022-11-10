import BaseComponent from "./BaseComponent";

export default class ForbiddenComponent extends BaseComponent {

    constructor() {
        super("#main");
    }
    template() {
        return `
        <h1>${this.msg.error.forbidden.h1}</h1>
            <img src="" alt="" class="img-fluid">
    `;
    }
};

