<template>
  <li class="item">
    <div class="item__content">
      <span class="item__content_col"> {{ user.dni }} </span>
      <span class="item__content_col"> {{ formatDate(user.birthDate) }} </span>
      <span class="item__content_col">
        <font-awesome-icon class="icon" :class="user.gender ? 'female' : 'male'" :icon="user.gender ? 'venus' : 'mars'" />
      </span>
      <span class="item__content_col"> {{ user.age }} </span>
      <span class="item__content_col">
        <font-awesome-icon class="icon" :class="user.state ? 'check' : 'noCheck'" :icon="user.state ? 'check' : 'xmark'" />
      </span>
    </div>
    <div class="item__actions">
      <vue-btn @actionBtn="openModal(user.dni)">
        <template v-slot:icon>
          <font-awesome-icon class="icon" icon="user-pen" />
        </template>
      </vue-btn>
      <vue-btn @actionBtn="$store.dispatch('deleteUser', user.dni)">
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
  props: {
    user: {
        type: Object,
        default: () => {}
    }
  },
  methods: {
    formatDate(newDate) {
      return new Date(newDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
    },
    openModal(dni) {
      this.$store.dispatch('updateType', false)
      this.$store.dispatch('getDniUser', dni)
      this.$store.dispatch('showModal', true)
    }
  }
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
.male {
    color: #63d9f6;
}
.female {
    color: #f663cc;
}
.check {
    color: #eff663;
}
.noCheck {
    color: #f66363;
}
.item__content {
  display: grid;
  grid-template-columns: repeat(2, 3fr) repeat(3, 1fr);
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
