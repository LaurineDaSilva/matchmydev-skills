<script>
import { useVuelidate } from '@vuelidate/core';
import { required, maxLength, alphaNum, minValue} from '@vuelidate/validators'

export default {
    setup(){
        return{
            validator : useVuelidate(),
        }
    },
    data() {
        return {
            inputs: {
                name: null,
                kindId: 0,
                color: '#FF0000',
            },
            kinds: [],
        };
    },
    validations(){
        return{
            inputs: {
                name:{
                    required,
                    maxLength: maxLength(100),
                },
                kindId:{
                    required,
                    minValue: minValue(1),
                },
                color:{
                    required,    
                }
            }
        }
    }
    ,
    methods: {
        async submit() {   
            const valide = await this.validator.$validate();
            if (valide) {
                this.$axios.post('/categories', this.inputs);
                // reset form & validation
                Object.assign(this.$data.inputs, this.$options.data().inputs);
                this.validator.$reset();
            } else {
                console.log("Server error")
            }

        },
        async getKinds() {
            const response = await this.$axios.get('/kinds');
            this.kinds = response.data;
        },

        async getOneCategory() {
            const category = await this.$axios.get(`/categories/${id}`);
            this.categories = category.data;
        }

    },
    mounted() {
        this.getKinds();
        this.getOneCategory();
    },
};
</script>

<template>
    <main class="container-xl my-5 pt-5">
        <h1 id="h1">Create a skill category</h1>
        <div class="middle">
        <form @submit.prevent="submit" class="col-12 col-md-6 mx-auto" id="form">
            <div class="mb-3">
            <label for="name" class="form-label">Category name</label>
            <input
                v-model.trim="inputs.name"
                id="name"
                name="name"
                type="text"
                class="form-control"
                :class="{'is-invalid' : validator.inputs.name.$error}"
            />
            <p class="form-text">
                Text with a maximum of 100 chars. Must be unique for a given kind.
            </p>
            </div>

            <div class="mb-3">
            <label for="kindId" class="form-label">Kind</label>
            <select
                v-model.number="inputs.kindId"
                id="kindId"
                name="kindId"
                class="form-select"
                :class="{'is-invalid' : validator.inputs.kindId.$error}"
            >
                <option value="0" selected>Select one kind</option>
                <option v-for="kind in kinds" :key="kind.id" :value="kind.id">
                {{ kind.name }}
                </option>
            </select>
            </div>

            <div class="mb-3">
            <label for="color" class="form-label">Color</label>
            <div class="input-group">
                <input
                v-model="inputs.color"
                id="color-field"
                name="color"
                type="text"
                class="form-control w-75"
                :class="{'is-invalid' : validator.inputs.color.$error}"
                />
                <input
                v-model="inputs.color"
                id="color-button"
                name="color-button"
                type="color"
                class="form-control form-control-color w-25"
                />
            </div>
            <p class="form-text">
                Use color picker or enter color code (e.g. #FF0000).
            </p>
            </div>

            <div class="mb-3">
            <button
                type="submit"
                class="btn btn-outline-dark col-12 col-md-3 offset-md-9"
            >
                Update
            </button>
            </div>
        </form>
        </div>
    </main>
</template>
