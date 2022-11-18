import { } from "";

export default class NotFound {

    render() {
        const contentError404 = `
            <h1>Error 404 - Not Found</h1>
            <img src="" alt="" class="img-fluid">
        `;

    const error404 = document.getElementById("form");
    error404.innerHTML = contentError404;
    };

}