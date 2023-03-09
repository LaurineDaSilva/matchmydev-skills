<template>

    <nav class="navbar bg-black navbar-dark container-xl navbar-expand-md">
        <a class="navbar-brand text-white mb-0 ">match<span class="logo-span">my</span>dev</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav text-white ">
                <li class="nav-item ms-3">
                    <router-link to="/" class="nav-link text-white">Create a skill category</router-link>
                </li> 
                <li class="nav-item ms-3"> 
                    <router-link to="/update/:id" class="nav-link text-white">Update a skill category</router-link>
                </li>

                <li class="nav-item ms-3">
                    <a href="#/skill-form" class="nav-link text-white"> Create a new skill </a>
                </li>
                <li class="nav-item ms-3">
                    <a href="#/category-list" class="nav-link text-white"> Search for skill categories </a>
                </li>
            </ul>
        </div>
        <!-- Select the language -->
        <div class="locale-changer">
            <select v-model="$i18n.locale" class="rounded">
                <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}
                </option>
            </select>
        </div>
    </nav>
</template>