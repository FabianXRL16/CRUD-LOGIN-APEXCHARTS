<template>
  <div class="signOff">
    <vue-btn class="btnSignOff" @actionBtn="signOff">
      <template v-slot:icon>
        <font-awesome-icon class="icon" icon="right-from-bracket" />
      </template>
    </vue-btn>
  </div>
</template>
<script>
import vueBtn from '@/components/custom/vueBtn.vue'
export default {
  name: 'vue-SignOff',
  components: {
    vueBtn
  },
  methods: {
    signOff() {
      localStorage.removeItem('auth')
      setTimeout(this.$router.push('/login'), 500)
    }
  }
}
</script>

<style scoped>
.signOff {
  display: flex;
  justify-content: flex-end;
}
.btnSignOff {
  background-color: transparent;
  font-size: 16px;
  padding-left: 12px;
}
</style>