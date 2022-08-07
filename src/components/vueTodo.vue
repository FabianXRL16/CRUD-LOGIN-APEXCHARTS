<template>
  <div class="container">
    <vue-sign-off />
    <vue-header />
    <vue-snippet />
    <vue-header-list />
    <vue-list :users="users" />
    <vue-btn class="btnAddItem" @actionBtn="openModal">
      <template v-slot:icon>
        <font-awesome-icon class="icon" icon="plus" />
      </template>
    </vue-btn>
    <vue-modal v-if="$store.state.showModal" ref="modal" />
  </div>
</template>

<script>
import vueList from '@/components/vueList.vue'
import vueSignOff from '@/components/vueSignOff.vue'
import vueHeaderList from '@/components/vueHeaderList.vue'
import vueHeader from '@/components/vueHeader.vue'
import vueSnippet from '@/components/vueSnippet.vue'
import vueModal from '@/components/vueModal.vue'
import vueBtn from '@/components/custom/vueBtn.vue'
import VueSignOff from './vueSignOff.vue'
export default {
  name: 'vue-todo',
  components: {
    vueList,
    vueSignOff,
    vueHeaderList,
    vueHeader,
    vueSnippet,
    vueBtn,
    vueModal,
    VueSignOff
},
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.users = this.$store.state.users
  },
  methods: {
    openModal() {
      this.$store.dispatch('updateType', true)
      this.$store.dispatch('showModal', true)
        // let modal = this.$refs.modal.$refs.modalContainer
        // modal.style.transform = 'scale(1)'
        // modal.style.transition = '.5s'
    },
  },
}
</script>

<style scoped>
.container {
  width: 80vw;
  height: 80vh;
  min-height: 540px;
  display: grid;
  grid-template-rows: 40px 25px 100px 50px 1fr;
}
.btnAddItem {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 25px;
  bottom: 20px;
  right: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
@media screen and (min-width: 870px) {
  .container {
    margin-top: -60px;
    width: 550px;
    height: 400px;
    min-height: 410px;
  }
  .btnAddItem {
    right: calc(50vw - 275px);
    bottom: calc(50vh - 240px);
  }
}
</style>
