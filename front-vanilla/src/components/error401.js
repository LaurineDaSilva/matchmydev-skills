import { } from "";

function renderError401() {
    const contentError401 = `
        <h1>Error 401 - Unauthorized</h1>
            <img src="" alt="" class="img-fluid">
    `;

    const error401 = document.getElementById("form");
    error401.innerHTML = contentError401;
};

export { renderError401 };