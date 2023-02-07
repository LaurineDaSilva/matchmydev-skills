<script>
    export default {
        data() {
            return {
                newCategory: {
                    name: "",
                    kind: "",
                    color: ""
                }
            }
        },
        methods: {
            logic() {

                //search my id:"color-button"
                const button = document.getElementById("color-button");

                //search my id:"color-field"
                const field = document.getElementById("color-field");

                // *****addEventListener for input color and input text of form    
                button.addEventListener("change", ()=>{field.value =button.value} ); 

                field.addEventListener("change", ()=>{button.value = field.value} );
                },
            create(event) {
                this.$axios.post('/categories', this.newCategory)
            }
        },
        mounted() {
            this.logic();
            }
        }
</script>

<template>

    <h1 id="h1">Create a skill category</h1>
            <div class="middle">
                <form  @submit.prevent="create" class="col-12 col-md-6 mx-auto" id="form">
                    <div class="mb-3">
                        <label for="name" class="form-label">Category name</label>
                        <input type="text" id="name" class="form-control" name="name">
                        <p class="form-text">Text with a maximum of 100 chars. Must be unique for a given kind.</p>
                    </div>

                    <div class="mb-3">
                        <label for="kind" class="form-label">Kind</label>
                        <select class="form-select" name="kind" required>
                            <option value="" selected>Select one kind</option>
                            <option value="Hard skills">Hard skills</option>
                            <option value="Soft skills">Soft skills</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="color" class="form-label">Color</label>
                        <div class="input-group">
                            <input type="text" id="color-field" class="form-control w-75" name="color" value= "#FF0000">
                            <input type="color" id="color-button" class="form-control form-control-color w-25" name="color-button"  value= "#FF0000">
                        </div>
                            <p class="form-text">Use color picker or enter color code (e.g. #FF0000).</p>
                    </div>              

                    <div class="mb-3">
                        <button type="submit" class="btn btn-outline-dark col-12 col-md-3 offset-md-9">Create</button>
                    </div>
                </form>
            </div>

</template>