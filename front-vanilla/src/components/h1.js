import { messages } from "../messages.js";

function renderh1() {
    const h1Content = `
    ${messages.h1}
    `
    ;

    const h1 = document.getElementById("h1");
    h1.innerHTML = h1Content;
}

export { renderh1 };