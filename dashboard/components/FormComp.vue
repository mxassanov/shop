<template>
<div class="rounded-lg p-6 shadow-xl max-w bg-white">
  <form @submit.prevent="validate">
    <vue-form-generator
      :schema="formSchema"
      :model="formModel"
      :options="formOptions"
      ref="form"
      @model-updated="onUpdateForm"
    />
    <div class="max-w flex justify-center">
      <button class="py-2 px-4 rounded-lg bg-green-800 text-white" type="submit">OK</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: "FormComp",
  props: {
    formSchema: {
      type: Object,
      default: () => {}
    },
    formModel: {
      type: Object,
      default: () => {}
    },
    formOptions: {
      type: Object,
      default: () => ({
        validateAsync: true
      })
    },
    title: {
      type: String,
      default: ''
    },
  },
  methods: {
    async validate() {
      const errors = await this.$refs.form.validate()
      const isValid = errors.length === 0
      if (isValid) {
        this.$emit('on-submit', this.formModel)
      }
    },
    onUpdateForm(value, field) {
      this.$emit(`on${field}Update`, value)
    }
  }
};
</script>
