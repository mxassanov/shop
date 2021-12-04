<template>
  <li
    class=" block px-4 py-2 text-white bg-black font-semibold hover:text-black hover:bg-white"
  >
    <router-link :to="`/`">
      {{ category.description }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    category: {
      type: Object,
      default: () => {},
    },
    isActive: Boolean,
  },
};
</script>
