<template>
  <label :for="componentId">
    {{ label }}
    <input :id="componentId" v-bind="$attrs" v-on="$listeners" />
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    const componentId = ``
    return {
      componentId: `id-${Math.ceil(Math.random() * 99999999999)}`,
    }
  },
}
</script>

<style lang="scss" scoped></style>
