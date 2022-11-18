import BaseComponent from "./BaseComponent.js";
import HttpClient from "../HttpClient.js";

export default class BaseIterableComponent extends BaseComponent {
    props = null;

    constructor(selector, props) {
        super(selector); 
        this.props = props;    
    }

    async render() {
        super.render();
        //special
        const elements = await HttpClient.send(this.props.url, this.props.method);
        //this.target = main node
        //this.target.querySelector("#profiles")
        const target = this.target.querySelector(this.props.elementsSelector);
        let content = "";
        elements.forEach(element => {
            content += this.elementTemplate(element);
        });
        target.innerHTML = content;
    }
    
    elementTemplate(element) {
        return null;
    }
}

