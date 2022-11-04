import { } from "";

function renderError403() {
    const contentError403 = `
        <h1>Error 403 - Forbidden</h1>
            <img src="" alt="" class="img-fluid">
    `;

    const error403 = document.getElementById("form");
    error403.innerHTML = contentError403;
};

export { renderError403 };