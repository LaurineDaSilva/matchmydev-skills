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

    },
    mounted() {
        this.getKinds();
    },
};
</script>

<template>
  <main class="container-xl my-5 pt-5">
    <h1 id="h1">{{ $t('categoryFormLabels.title.create') }}</h1>
    <div class="middle">
      <form @submit.prevent="submit" class="col-12 col-md-6 mx-auto" id="form">
        <div class="mb-3">
          <label for="name" class="form-label">{{ $t('categoryFormLabels.categoryName') }}</label>
          <input
            v-model.trim="inputs.name"
            id="name"
            name="name"
            type="text"
            class="form-control"
            :class="{'is-invalid' : validator.inputs.name.$error}"
          />
          <p class="form-text">
            {{ $t("categoryFormLabels.categoryNameHelptext") }}
          </p>
        </div>

        <div class="mb-3">
          <label for="kindId" class="form-label">{{ $t('categoryFormLabels.categoryKind') }}</label>
          <select
            v-model.number="inputs.kindId"
            id="kindId"
            name="kindId"
            class="form-select"
            :class="{'is-invalid' : validator.inputs.kindId.$error}"
          >
            <option value="0" selected>{{ $t("categoryFormLabels.categoryKindPlaceholder") }}</option>
            <option v-for="kind in kinds" :key="kind.id" :value="kind.id">
              {{ kind.name }}
            </option>
          </select>
        </div>

        <div class="mb-3">
          <label for="color" class="form-label">{{ $t('categoryFormLabels.categoryColor') }}</label>
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
            {{ $t("categoryFormLabels.categoryColorHelptext") }}
          </p>
        </div>

        <div class="mb-3">
          <button
            type="submit"
            class="btn btn-outline-dark col-12 col-md-3 offset-md-9"
          >
          {{ $t('categoryFormLabels.submitButton.create') }}
          </button>
        </div>
      </form>
                <!-- CONFIGURATION OF THE ROUTE --> <!--à changer l'id-->
                <!-- <button>
                    <a href="#/update/2" class="nav-link text-white"> Update category </a> 
                </button> -->
    </div>
  </main>
</template>