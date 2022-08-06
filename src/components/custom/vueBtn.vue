<template>
  <button @click="search">
    <slot name="icon" />
    {{ text }}
  </button>
</template>
<script>
export default {
  name: 'vue-btn',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  methods: {
    search() {
      this.$emit('actionBtn')
    },
  },
}
</script>
<style scoped>
button {
  background: var(--bg-primary);
  color: var(--white);
  width: 28px;
  height: 18px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
