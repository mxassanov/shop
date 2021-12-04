<template>
  <div class="p-4">
    <div class="flex justify-between">
      <h3 class="text-gray-700 text-2xl font-">{{ config.singleName }}</h3>
      <nuxt-link :to="`${config.storeName}/form`" class="btn btn-info">
        <table-large-plus class="mr-1" />
        Add {{ config.singleName }}
      </nuxt-link>
    </div>
    <table-wrapper>
      <my-table
        :actions="actions"
        :columns="columns"
        :data="items"
        @onEdit="handleEdit"
        @onDelete="handleDelete"
      />
    </table-wrapper>
  </div>
</template>

<script>
// Setup
import { columns, actions, config } from './setup'
// Mixin
import { crudMixin } from '~/mixins/crud.mixin'

export default {
  name: config.pageName,
  middleware: 'auth',
  mixins: [crudMixin(config)],
  mounted() {
    this.fetchItems()
  },
  data: () => ({
    columns,
    actions,
    config
  }),
  methods: {
    handleEdit({ id }) {
      this.$router.push(`/${config.storeName}/form/${id}`)
    },
  },
}
</script>
