import BaseComponent from "./BaseComponent.js";


export default class HeaderComponent extends BaseComponent {
    
    constructor() {
        super("#header");
    }

    template() {
        return `
        <nav class="navbar bg-black navbar-dark container-xl navbar-expand-md">
            <a class="navbar-brand text-white mb-0 ">${this.msg.logo.firstWord}<span class="logo-span">${this.msg.logo.secondWord}</span>${this.msg.logo.thirdWord}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav text-white ">
                    <li class="nav-item ms-3">
                        <a href="#/category-form" class="nav-link text-white"> Create a skill category </a>
                    </li>
                    <li class="nav-item ms-3">
                        <a href="#/skill-form" class="nav-link text-white"> Create a new skill </a>
                    </li>
                    <li class="nav-item ms-3">
                        <a href="#/category-list" class="nav-link text-white"> Search for skill categories </a>
                    </li>
                </ul>
            </div>
        </nav>`;
    }
};