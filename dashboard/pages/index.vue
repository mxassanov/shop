<template>
  <div class="w-full flex justify-center items-center h-100">
    <chart
      v-if="isLoaded"
      :chartdata="dataCount"
      :labelsData="labelsData"
      :options="options"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Chart: () => import('@/components/PieChart.vue'),
  },
  async mounted() {
    try {
      await this.fetchProducts()
      await this.fetchCategories()
      this.dataCount = [this.products.length, this.categories.length]
      this.isLoaded = true
    } catch (err) {
      console.error(err)
    }
  },
  data() {
    return {
      isLoaded: false,
      labelsData: ['Products', 'Categories'],
      dataCount: [40, 20],
      options: { responsive: true, maintainAspectRatio: false },
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/items',
      categories: 'categories/items',
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchAll',
      fetchCategories: 'categories/fetchAll',
    }),
  },
}
</script>
