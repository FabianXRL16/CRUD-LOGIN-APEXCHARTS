<template>
  <section>
    <h2>
      What's up, <strong>{{ name }}!</strong>
    </h2>
    <router-link to="/statistics">
      <font-awesome-icon class="icon" icon="chart-pie" />
    </router-link>
  </section>
</template>
<script>
export default {
  name: 'vue-snippet',
  data() {
    return {
      name: 'Fabian'
    }
  }
}
</script>
<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h2 {
  font-weight: 400;
}
strong {
  color: var(--bg-primary);
  font-size: 30px;
}
a {
  color: var(--bg-white);
}
</style>