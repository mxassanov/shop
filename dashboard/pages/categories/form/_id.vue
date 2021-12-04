<template>
  <form-wrapper :title="`${config.name}`">
    <form-comp
      v-show="model"
      :form-schema="schema"
      :form-model="model"
      @on-submit="onFormSubmit"
    />
    <p class="text-danger">
      {{ error }}
    </p>
  </form-wrapper>
</template>

<script>
// Setups
import { schema, defaultForm } from './fields'
import { config } from '../setup'
// Mixins
import { relationsMixins } from '~/mixins/relation.mixin'

import { mapActions, mapGetters } from "vuex";

export default {
  name: 'ProductForm',
  mixins: [relationsMixins],
  components: {
    FormComp: () => import('~/components/FormComp'),
    Wrapper: () => import('~/components/Wrapper'),
  },
  async mounted() {
    await this.fetchProducts();
    this.setFields({ fieldKey: 'products', values: this.products });

    if (this.isUpdating) {
      await this.fetchItem(this.$route.params.id)
      this.model = { ...this.item }
      return
    }
    this.setDefaultModel()
  },
  data: () => ({
    model: null,
    schema,
    config
  }),
  computed: {
    ...mapGetters({
      item: `${config.storeName}/item`,
      error: `${config.storeName}/itemErr`,
      products: 'products/items',
    }),
    isUpdating: ({
      $route: {
        params: { id },
      },
    }) => id !== undefined,
  },
  methods: {
    ...mapActions({
      createItem: `${config.storeName}/create`,
      updateItem: `${config.storeName}/update`,
      fetchItem: `${config.storeName}/fetchOne`,

      fetchProducts: 'products/fetchAll',
    }),
    setDefaultModel() {
      this.model = {
        ...defaultForm
      }
    },
    async onItemUpdate() {
      const updatedModel = {
        ...this.model,
        products: this.model.products.map((product) => product._id)
      };
      await this.updateItem({
        id: this.$route.params.id,
        payload: updatedModel
      });
      this.$router.back()
    },
    async onItemCreate() {
      await this.createItem(this.model)
      this.$router.back()
    },
    async onFormSubmit() {
      if (this.isUpdating) {
        this.onItemUpdate()
        return
      }
      this.onItemCreate()
    }
  },
}
</script>

<style scoped>
.product-form {
  padding: 30px;
}
</style>
