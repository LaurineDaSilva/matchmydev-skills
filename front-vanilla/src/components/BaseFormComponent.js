import BaseComponent from "./BaseComponent.js";
import HttpClient from "../HttpClient.js";

export default class BaseFormComponent extends BaseComponent {
    props = null;

    constructor(selector, props) {
        super(selector);
        this.props = props;
    }

    async render() {
        super.render();
        // Form specific logic:
        const data = await this.dataModel();
        const properties = Object.keys(data);
        const form = this.target.querySelector("form"); // marche pour l'approche 1 form/component. If several forms in a single component, another approach is needed.
        BaseFormComponent.bind(properties, form, data);
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            HttpClient.send(this.props.url, this.props.method, data);
        });
    }

    static bind(properties, form, data) {
        properties.forEach((property) => {
            const element = form.elements[property];
            const type = element.type;  
            BaseFormComponent.bindModelToView(element, type, data, property);
            BaseFormComponent.bindViewToModel(element, type, data, property);
        });
    }

    static bindModelToView(element, type, data, property) {
        if (type == "checkbox") {
            element.checked = data[property];  
        } else if(type == "select-multiple") {
            const items = data[property];
            let options = "";
            items.forEach((item)=> {
                const option = `<option value="${item.id}">${item.label}</option>`;
                options += option;
            });
            element.innerHTML = options;
        } else {
            element.value = data[property];
        }
    }

    static bindViewToModel(element, type, data, property) {
        element.addEventListener("change", (event) => {
            if (type == "checkbox") {
                data[property] = element.checked;
            } else {
                data[property] = element.value;
            }
        });
    }

    async dataModel() {
        return null;
    }
}
