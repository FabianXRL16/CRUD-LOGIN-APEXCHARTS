<template>
  <vue-todo />
</template>

<script>
import vueTodo from '@/components/vueTodo.vue'
export default {
  name: 'Home',
  components: {
    vueTodo
  },
  mounted() {
    if(!localStorage.getItem('auth')) this.$router.push('/login')
  }
}
</script>
