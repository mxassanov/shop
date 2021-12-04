<template>
<div class="mx-auto px-6 py-4">
  <h3 class="text-gray-700 text-2xl font-medium">
    {{ title }}
  </h3>
  <slot />
</div>
</template>

<script>
export default {
  name: "Wrapper",
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>
