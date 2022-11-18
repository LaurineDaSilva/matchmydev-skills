import { } from "";


export default class InternalServerError {
    render() {
        const contentError500 = `
            <h1>Error 500 - Internal Server Error</h1>
            <img src="" alt="" class="img-fluid">
        `;

    const error500 = document.getElementById("form");
    error500.innerHTML = contentError500;
};

}