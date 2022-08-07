<template>
  <vue-form />
</template>

<script>
import vueForm from '@/components/vueForm.vue'
export default {
  name: 'Home',
  components: {
    vueForm
  },
  mounted() {
    if(localStorage.getItem('auth')) this.$router.push('/')
  }
}
</script>