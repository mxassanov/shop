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

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProductForm',
  mixins: [relationsMixins],
  middleware: 'auth',
  components: {
    FormComp: () => import('~/components/FormComp'),
    FormWrapper: () => import('~/components/FormWrapper'),
  },
  async mounted() {
    await this.fetchCategories()
    this.setFields({ fieldKey: 'category', values: this.categories })

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
    config,
  }),
  computed: {
    ...mapGetters({
      item: `${config.storeName}/item`,
      error: `${config.storeName}/itemErr`,
      categories: 'categories/items',
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

      fetchCategories: 'categories/fetchAll',
    }),
    setDefaultModel() {
      this.model = {
        ...defaultForm,
      }
    },
    async onItemUpdate() {
      const updatedModel = {
        ...this.model,
        category: this.model.category,
      }
      await this.updateItem({
        id: this.$route.params.id,
        payload: updatedModel,
      })
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
    },
  },
}
</script>

<style scoped>
.product-form {
  padding: 30px;
}
</style>
