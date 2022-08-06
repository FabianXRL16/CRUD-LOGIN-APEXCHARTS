<template>
  <section>
    <h2>
      What's up, <strong>{{ name }}!</strong>
    </h2>
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
}
h2 {
  font-weight: 400;
}
strong {
  color: var(--bg-primary);
  font-size: 30px;
}
</style>