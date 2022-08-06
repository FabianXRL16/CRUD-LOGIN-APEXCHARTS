<template>
  <input
    v-model="inputModel"
    type="date"
    @keyup.enter="keyUpCustom"
  />
</template>

<script>
export default {
  name: "vue-input-date",
  props: {
    value: {
      type: String,
    }
  },
  computed: {
    inputModel: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  methods: {
    keyUpCustom() {
      this.$emit("actionInput");
    },
  },
};
</script>
<style scoped>
input {
  height: 100%;
  width: 100%;
  padding: 0px 10px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: var(--bg-dark-grey);
  color: var(--bg-white);
}
input::-webkit-calendar-picker-indicator {
    background-color: var(--bg-white);
    border-radius: 4px;
    cursor: pointer;
}
</style>