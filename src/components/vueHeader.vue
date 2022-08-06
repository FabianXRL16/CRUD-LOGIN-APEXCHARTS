<template>
  <header>
    <vue-search />
  </header>
</template>
<script>
import vueSearch from "@/components/custom/vueSearch.vue";
export default {
  name: 'vue-header',
  components: {
    vueSearch
  }
}
</script>