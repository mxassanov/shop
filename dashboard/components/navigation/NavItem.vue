<template>
  <nuxt-link :to="to" 
    class="flex items-center mt-2 py-2 px-6 text-gray-100 hover:bg-gray-700 hover:text-gray-100 hover:no-underline"
    :class="{
      'bg-gray-700 border-l-4': active
    }"
  >
    <view-dash-out class="mr-3 mb-1" />
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    to: {
      type: String,
      default: ''
    }
  },
  computed: {
    active: ({ $route: { path }, to }) => path === to, 
  }
}
</script>
