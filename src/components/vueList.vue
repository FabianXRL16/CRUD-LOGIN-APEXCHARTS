<template>
  <ul class="list">
    <vue-item v-for="user in filteredUsers" :key="user.dni" :user="user" />
  </ul>
</template>
<script>
import vueItem from '@/components/vueItem.vue'
export default {
  name: 'vue-list',
  components: {
    vueItem
  },
  props: {
    users: {
        type: Array,
        default: () => []
    }
  },
  computed: {
    filteredUsers() {
        let filter = this.$store.state.userToSearch
        if(!filter) return this.users
        return this.users.filter(i => i.dni.includes(filter))
    }
  },
}
</script>

<style scoped>
.list {
  padding: 0px;
  margin: 0px;
  list-style: none;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: .8px;
}
.list::-webkit-scrollbar {
  width: 5px;
}

.list::-webkit-scrollbar-thumb {
  width: 5px;
  border-radius: 4px;
  background-color: var(--bg-white);
}

.list::-webkit-scrollbar-thumb:hover {
  background: var(--bg-primary);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}
</style>