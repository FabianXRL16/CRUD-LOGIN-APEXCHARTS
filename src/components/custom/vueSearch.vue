<template>
  <nav>
    <input v-model="valueInput" type="text" placeholder="Search user by DNI ..." />
  </nav>
</template>
<script>
export default {
  name: 'vue-input-text',
   data() {
    return {
      valueInput: "",
    }
  },
  watch: {
    valueInput(dni) {
      this.$store.dispatch("userToSearch", dni);
    },
  },
}
</script>
<style scoped>
input {
  background-color: var(--bg-dark-grey);
  height: 25px;
  border-radius: 4px;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
  opacity: .4;
  transition: .3s;
}
input::placeholder, input {
  color: var(--bg-white);
}
input:hover, input:active, input:focus {
  opacity: 1;
  transition: .3s;
}
</style>