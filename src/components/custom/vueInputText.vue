<template>
  <input
    v-model="inputModel"
    @keyup.enter="keyUpCustom"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "vue-input-text",
  props: {
    value: {
      type: String,
    },
    placeholder: {
        type: String,
        default: "",
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
  height: 30px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: var(--bg-dark-grey);
  padding: 0px 10px;
}
input::placeholder, input {
  color: var(--bg-white);
}
</style>