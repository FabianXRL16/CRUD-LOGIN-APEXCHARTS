<template>
  <div class="input">
    <input
      :type="showPassword ? 'text' : 'password'"
      v-model="inputModel"
      @keyup.enter="keyUpCustom"
      :placeholder="placeholder"
    />
    <span @click="showPassword = !showPassword">
      <font-awesome-icon
        class="icon"
        :icon="showPassword ? 'eye-slash' : 'eye'"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: 'vue-input-password',
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showPassword: false,
    }
  },
  computed: {
    inputModel: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
  methods: {
    keyUpCustom() {
      this.$emit('actionInput')
    },
  },
}
</script>
<style scoped>
.input {
  position: relative;
}
input {
  height: 30px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: var(--bg-dark-grey);
  padding: 0px 10px;
}
input::placeholder,
input {
  color: var(--bg-white);
}
span {
  position: absolute;
  right: 10px;
  top: 4px;
  cursor: pointer;
}
</style>
