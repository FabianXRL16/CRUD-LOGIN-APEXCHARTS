<template>
  <li class="item">
    <div class="item__content">
      <!-- <p class="item__task">Vue.js es un framewrok extraordinario y facil de aprender</p> -->
      <span class="item__content_col"> 73860228 </span>
      <span class="item__content_col"> 13/12/1998 </span>
      <span class="item__content_col"> Female </span>
      <span class="item__content_col"> 23 </span>
      <span class="item__content_col"> True </span>
    </div>
    <div class="item__actions">
      <vue-btn>
        <template v-slot:icon>
          <font-awesome-icon class="icon" icon="user-pen" />
        </template>
      </vue-btn>
      <vue-btn>
        <template v-slot:icon>
          <font-awesome-icon class="icon" icon="xmark" />
        </template>
      </vue-btn>
    </div>
  </li>
</template>
<script>
import vueBtn from '@/components/custom/vueBtn.vue'
export default {
  name: 'vue-item',
  components: {
    vueBtn,
  },
}
</script>
<style scoped>
.item {
  background-color: var(--bg-dark-grey);
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 60px;
  gap: 10px;
  box-sizing: border-box;
  padding: 10px 15px 10px 0px;
  border-radius: 5px;
}
.item__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr) repeat(2, 30px);
  justify-content: center;
}
.item__content_col {
  font-size: 10px;
  line-height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item__actions {
  display: flex;
  justify-content: space-between;
}
.item__actions button:nth-child(1) {
  background-color: var(--bg-purple);
}
@media screen and (min-width: 870px) {
  .item__content {
    grid-template-columns: repeat(3, 1fr) 60px 60px;
  }
  .item__content_col {
    font-size: 12px;
    line-height: 12px;
  }
}
</style>
