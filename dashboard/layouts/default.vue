<template>
  <div class="flex h-screen">
    <my-nav :menu="menu" />
    <div class="flex-1 flex flex-col overflow-hidden">
      <my-header @onLogout="handleLogout" />
      <main class="flex-1 overflow-x-hidden bg-gray-200">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import menu from './setup'
export default {
  name: 'default.vue',
  components: {
    MyNav: () => import('../components/navigation/MyNav'),
    MyHeader: () => import('../components/layouts/MyHeader.vue'),
  },
  data: () => ({
    menu,
  }),
  methods: {
    async handleLogout() {
      localStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>
