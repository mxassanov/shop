<template>
  <table class="table min-w-full">
    <thead>
      <table-header>#</table-header>
      <table-header v-for="({ name }, i) in columns" :key="i">
        {{ name }}
      </table-header>
      <table-header v-show="actions.length !== 0">Actions</table-header>
    </thead>
    <tbody>
      <tr v-for="(item, i) in data" :key="i">
        <table-ceil>{{ i + 1 }}</table-ceil>
        <table-ceil v-for="({ key }, tdInd) in columns" :key="`column${tdInd}`">
          {{ item[key] }}
        </table-ceil>
        <table-ceil
          v-for="({ className, emit, actionKey, label, icon = '' }, actionInd) in actions"
          :key="`action${actionInd}`"
        >
          <button
            :class="className"
            @click="$emit(emit, { id: item[actionKey] })"
          >
            <component v-bind:is="`${icon}`"></component>
            {{ label }}
          </button>
        </table-ceil>
      </tr>
    </tbody>
  </table>
</template>

<script>
import TableCeil from './TableCeil.vue'
export default {
  name: 'MyTable',
  components: {
    TableHeader: () => import('./TableHeader.vue'),
    TableCeil: () => import('./TableCeil.vue'),
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    actions: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
