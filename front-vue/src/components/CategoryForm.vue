<script>
    export default {
        data() {
            return {
                inputs: {
                    name: null,
                    kindId: null,
                    color: "#FF0000"
                },
                kinds: []
            }
        },
        methods: {
            submit() {
                this.$axios.post('/categories', this.inputs)
            },
            async getKinds(){
                const response = await this.$axios.get('/kinds');
                this.kinds = response.data;
            }
        },
        mounted(){
            // this.getKinds();
        }
    }

</script>

<template>

    <main class="container-xl my-5 pt-5">
        <h1 id="h1">Create a skill category</h1>
        <div class="middle">
            <form  @submit.prevent="submit" class="col-12 col-md-6 mx-auto" id="form">
                <div class="mb-3">
                    <label for="name" class="form-label">Category name</label>
                    <input v-model="inputs.name" id="name" name="name" type="text" class="form-control">
                    <p class="form-text">Text with a maximum of 100 chars. Must be unique for a given kind.</p>
                </div>

                <div class="mb-3">
                    <label for="kindId" class="form-label">Kind</label>
                    <select v-model="inputs.kindId" id="kindId" name="kindId" class="form-select">
                        <option value="" selected>Select one kind</option>
                        <!-- <option v-for="kind in kinds" :key="kind.id" :value="kind.id">{{ kind.name }}</option> -->
                    </select>
                </div>

                <div class="mb-3">
                    <label for="color" class="form-label">Color</label>
                    <div class="input-group">
                        <input v-model="inputs.color" id="color-field" name="color" type="text"  class="form-control w-75" >
                        <input v-model="inputs.color" id="color-button" name="color-button" type="color" class="form-control form-control-color w-25" >
                    </div>
                        <p class="form-text">Use color picker or enter color code (e.g. #FF0000).</p>
                </div>              

                <div class="mb-3">
                    <button type="submit" class="btn btn-outline-dark col-12 col-md-3 offset-md-9">Create</button>
                </div>
            </form>
        </div>
    </main>

</template>