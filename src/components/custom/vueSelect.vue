<template>
  <div class="select">
    <select name="gender" id="gender" @change="optionValue()">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'vue-select',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    optionVal: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
  methods: {
    optionValue() {
      let gender = document.getElementById('gender').value
      this.$emit('actionSelect', gender)
    },
  },
}
</script>
<style scoped>
select {
  appearance: none;
  border-radius: 4px;
  height: 100%;
  width: 100%;
  background-color: var(--bg-dark-grey);
  color: var(--bg-white);
  padding: 0px 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.select {
  position: relative;
  width: 100%;
  height: 100%;
}
.select::after {
  content: '\25BC';
  position: absolute;
  color: var(--bg-white);
  top: 3px;
  right: 8px;
  cursor: pointer;
  pointer-events: none;
}
</style>
