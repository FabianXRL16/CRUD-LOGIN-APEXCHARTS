<template>
  <div class="modal" ref="modalContainer">
    <div class="form">
      <!-- corregir tag a form -->
      <div class="form__content">
        <h2>New Task</h2>
        <div class="input__group" v-if="$store.state.usersUpdateType">
          <label>DNI</label>
          <vue-input v-model="dni" />
        </div>
        <div class="input__group">
          <label>Birth</label>
          <vue-date-picker v-model="dateBirth" />
        </div>
        <div class="input__group">
          <label>Age</label>
          <vue-input v-model="age" />
        </div>
        <div class="input__group">
          <label>Gender</label>
          <vue-select :options="options" @actionSelect="getValueSelect" />
        </div>
        <div class="input__group">
          <label>State</label>
          <vue-radio-button @actionRadio="getValueRadio" />
        </div>
      </div>
      <div class="actions">
        <vue-btn :text="'Add'" type="submit" @actionBtn="addUser" />
        <vue-btn class="btnAddItem" @actionBtn="closeModal">
          <template v-slot:icon>
            <font-awesome-icon class="icon" icon="xmark" />
          </template>
        </vue-btn>
      </div>
    </div>
  </div>
</template>
<script>
import vueBtn from '@/components/custom/vueBtn.vue'
import vueInput from '@/components/custom/vueInputText.vue'
import vueDatePicker from '@/components/custom/vueDatePicker.vue'
import vueSelect from '@/components/custom/vueSelect.vue'
import vueRadioButton from '@/components/custom/vueRadioButton.vue'
export default {
  name: 'vue-modal',
  components: {
    vueBtn,
    vueInput,
    vueDatePicker,
    vueSelect,
    vueRadioButton,
  },
  data() {
    return {
      options: ['Male', 'Female'],
      dni: null,
      dateBirth: null,
      age: '',
      gender: true,
      state: true,
    }
  },
  methods: {
    addUser() {
      this.$store.state.usersUpdateType
        ? this.newUser()
        : this.editUser()
    },
    closeModal() {
      this.$store.dispatch('showModal', false)
      // this.$refs.modalContainer.style.transform = 'scale(0)'
      // this.$refs.modalContainer.style.transition = '.5s'
    },
    newUser() {
      let data = {
        dni: this.dni,
        dateBirth: this.dateBirth,
        age: this.age,
        gender: this.gender,
        state: this.state
      }
      this.$store.dispatch('addUser', data)
      this.$store.dispatch('showModal', false)
    },
    editUser() {
      let data = {
        dateBirth: this.dateBirth,
        age: this.age,
        gender: this.gender,
        state: this.state
      }
      this.$store.dispatch('editUser', data)
      this.$store.dispatch('showModal', false)
    },
    getValueSelect(newValue) {
      this.gender = newValue === 'Male'
    },
    getValueRadio(newValue) {
      this.state = newValue === 'Active'
    },
  },
}
</script>
<style scoped>
.modal {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: scale(0);
  transition: 0.3s; */
}

.form {
  /* corregir a form */
  width: 60vw;
  min-width: 300px;
  max-width: 400px;
  height: 340px;
  background-color: var(--bg-secondary);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  grid-template-rows: 1fr 40px;
  gap: 20px;
}
.form__content {
  display: grid;
  grid-template-rows: 40px repeat(5, 30px);
  gap: 10px;
  height: 230px;
}
.input__group {
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
}

.actions {
  display: flex;
  justify-content: space-between;
}

.actions button {
  height: 40px;
  font-size: 16px;
  font-weight: 400;
}
.actions button:nth-child(1) {
  width: calc(100% - 44px);
  background-color: var(--bg-purple);
}

.actions button:nth-child(2) {
  width: 40px;
}
</style>
