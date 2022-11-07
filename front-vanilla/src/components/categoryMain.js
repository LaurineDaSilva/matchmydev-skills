import { messages } from "../messages.js";

function renderCategoryMain() {
    const categoryMainContent = `
        <h1 id="h1">${messages.categoryMain.h1}</h1>
            <div class="middle">
                <form class="col-12 col-md-6 mx-auto" id="form">
                    <div class="mb-3">
                        <label for="category-name" class="form-label">${messages.categoryMain.name.label}</label>
                        <input type="text" id="category-name" class="form-control" name="category-name" required minlength="1" maxlength="100">
                        <p class="form-text">${messages.categoryMain.name.helpText}</p>
                    </div>

                    <div class="mb-3">
                        <p class="form-label">${messages.categoryMain.kind.label}</p>
                        <select class="form-select" required>
                            <option value="" selected>${messages.categoryMain.kind.valueDefault}</option>
                            <option value="1">${messages.categoryMain.kind.value1}</option>
                            <option value="2">${messages.categoryMain.kind.value2}</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="category-color" class="form-label">${messages.categoryMain.color.label}</label>
                        <div class="input-group">
                            <input type="text" id="category-color-field" class="form-control w-75" name="category-color" required minlength="1" maxlength="7">
                            <input type="color" id="category-color-button" class="form-control form-control-color w-25" name="category-color"  value= "#FF0000" required>
                        </div>
                            <p class="form-text">${messages.categoryMain.color.helpText}</p>
                    </div>              

                    <div class="mb-3">
                        <input type="submit" class="btn btn-outline-dark col-12 col-md-3 offset-md-9" value="Create"/>
                    </div>
                </form>
            </div>`
    ;

    const main = document.getElementById("main");
    main.innerHTML = categoryMainContent;
}

export { renderCategoryMain };