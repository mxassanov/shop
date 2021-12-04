<template>
  <header
    class="
      flex
      justify-end
      items-center
      py-1
      px-6
      bg-gray-50
      border-b-4 border-gray-400
    "
  >
    <button
      class="py-2 px-3 rounded-lg bg-red-900 text-white"
      @click="$emit('onLogout')">
      Logout
    </button>
  </header>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>
