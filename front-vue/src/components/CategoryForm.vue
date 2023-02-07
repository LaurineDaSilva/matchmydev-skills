<script>
    export default {
        data() {
            return {
                h1: "Create a skill category",
                name : {
                    label: "Category name",
                    helpText: "Text with a maximum of 100 chars. Must be unique for a given kind."
                },
                kind: {
                    label: "Kind",
                    valueDefault: "Select one kind",
                    value1: "Hard skills",
                    value2: "Soft skills"
                },
                color: {
                    label: "Color",
                    helpText: "Use color picker or enter color code (e.g. #FF0000)."
                },
            }
        },
    }
</script>

<template>

    <h1 id="h1">{{this.h1}}</h1>
            <div class="middle">
                <form class="col-12 col-md-6 mx-auto" id="form">
                    <div class="mb-3">
                        <label for="name" class="form-label">{{this.name.label}}</label>
                        <input type="text" id="name" class="form-control" name="name" required minlength="1" maxlength="100">
                        <p class="form-text">{{this.name.helpText}}</p>
                    </div>

                    <div class="mb-3">
                        <label for="kind" class="form-label">{{this.kind.label}}</label>
                        <select class="form-select" name="kind" required>
                            <option value="" selected>{{this.kind.valueDefault}}</option>
                            <option value="Hard skills">{{this.kind.value1}}</option>
                            <option value="Soft skills">{{this.kind.value2}}</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="color" class="form-label">{{this.color.label}}</label>
                        <div class="input-group">
                            <input type="text" id="color-field" class="form-control w-75" name="color" value= "#FF0000" minlength="1" maxlength="8" required>
                            <input type="color" id="color-button" class="form-control form-control-color w-25" name="color-button"  value= "#FF0000" >
                        </div>
                            <p class="form-text">{{this.color.helpText}}</p>
                    </div>              

                    <div class="mb-3">
                        <button type="submit" class="btn btn-outline-dark col-12 col-md-3 offset-md-9">Create</button>
                    </div>
                </form>
            </div>

</template>