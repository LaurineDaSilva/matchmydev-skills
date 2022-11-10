import BaseComponent from "./BaseComponent.js";


export default class HeaderComponent extends BaseComponent {
    
    constructor() {
        super("#header");
    }

    template() {
        return `
        <nav class="navbar bg-black navbar-dark container-xl navbar-expand-md">
            <a class="navbar-brand text-white mb-0 ">${messages.logo.firstWord}<span class="logo-span">${messages.logo.secondWord}</span>${messages.logo.thirdWord}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav text-white ">
                    <li class="nav-item ms-3">
                        <a href="#" class="nav-link text-white"> Profiles </a>
                    </li>
                    <li class="nav-item ms-3">
                        <a href="#" class="nav-link text-white"> Projects </a>
                    </li>
                    <li class="nav-item ms-3">
                        <a href="#" class="nav-link text-white"> Sign In </a>
                    </li>
                </ul>
            </div>
        </nav>`;
    }
};

