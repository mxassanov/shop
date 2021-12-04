import { mapGetters, mapActions } from 'vuex'

export const crudMixin = (config) => ({
  components: {
    MyTable: () => import('~/components/table-components/MyTable'),
    TableWrapper: () => import('~/components/TableWrapper.vue')
  },
  computed: {
    ...mapGetters({
      items: `${config.storeName}/items`,
    }),
  },
  methods: {
    ...mapActions({
      fetchItems: `${config.storeName}/fetchAll`,
      deleteItem: `${config.storeName}/delete`
    }),
    async handleDelete({ id }) {
      await this.deleteItem(id)
      this.fetchItems()
    },
  }
})