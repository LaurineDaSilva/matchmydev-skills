import Messages from "../Messages.js";

export default class BaseComponent {

    msg = Messages.messages;

    selector = null;

    constructor(selector) {
        this.selector = selector;
    }

    render() {
        this.target = document.querySelector(this.selector);
        this.target.innerHTML = this.template();
    }

    template() {
        return null;
    }
};