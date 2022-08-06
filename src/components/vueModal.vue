<template>
  <div class="modal" ref="modalContainer">
    <div class="form"> <!-- corregir tag a form -->
      <div class="form__content">
        <h2>New Task</h2>
        <div class="input__group">
          <label>DNI</label>
          <vue-input :placeholder="'New task'" />
        </div>
        <div class="input__group">
          <label>Birth</label>
          <vue-input :placeholder="'New task'" />
        </div>
        <div class="input__group">
          <label>Age</label>
          <vue-input :placeholder="'New task'" />
        </div>
        <div class="input__group">
          <label>Gender</label>
          <vue-input :placeholder="'New task'" />
        </div>
        <div class="input__group">
          <label>State</label>
          <vue-input :placeholder="'New task'" />
        </div>
      </div>
      <div class="actions">
        <vue-btn :text="'Add'" type="submit" @actionBtn="addTask" />
        <vue-btn :text="'x'" type="submit" @actionBtn="closeModal" />
      </div>
    </div>
  </div>
</template>
<script>
import vueBtn from '@/components/custom/vueBtn.vue'
import vueInput from '@/components/custom/vueInputText.vue'
export default {
  name: "vue-modal",
  components: {
    vueBtn,
    vueInput
  },
  methods: {
    addTask() {
      console.log('add')
    },
    closeModal() {
      this.$refs.modalContainer.style.transform = "scale(0)";
      this.$refs.modalContainer.style.transition = ".5s";
    }
  }
};
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
  transform: scale(0);
  transition: .3s;
}

.form { /* corregir a form */
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