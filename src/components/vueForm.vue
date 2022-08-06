<template>
  <div class="form">
    <div class="form__content">
      <h2>Login</h2>
      <div class="input__group">
        <label>Name</label>
        <vue-input v-model="nameUser" />
      </div>
      <div class="input__group">
        <label>Password</label>
        <vue-input v-model="password" />
      </div>
      <div class="input__group" v-if="typeLogin">
        <label>Password</label>
        <vue-input v-model="secondPassword" />
      </div>
      <div class="input__group" v-if="typeLogin">
        <label>Email</label>
        <vue-input v-model="email" />
      </div>
    </div>
    <div class="form__actions">
      <vue-btn :text="typeLogin ? 'Create account' : 'Sign in'" @actionBtn="actionLogin" />
      <vue-btn @actionBtn="changeTypeLogin">
        <template v-slot:icon>
          <span v-if="typeLogin">Already have an account? <strong>Sign in</strong></span>
          <span v-else>I do not have an account <strong>Sign up</strong></span>
        </template>
      </vue-btn>
      <!-- <vue-btn :text="'Sign up'" /> -->
    </div>
  </div>
</template>

<script>
import vueBtn from '@/components/custom/vueBtn.vue'
import vueInput from '@/components/custom/vueInputText.vue'
export default {
  name: 'vue-todo',
  components: {
    vueBtn,
    vueInput
},
  data() {
    return {
      nameUser: null,
      password: null,
      secondPassword: null,
      email: null,
      typeLogin: true // true is sign up and false is sign up
    }
  },
  methods: {
    actionLogin() {
      this.typeLogin
        ? this.signUp()
        : this.signIn()
    },
    signIn() {
      console.log(this.nameUser + this.password)
    },
    signUp() {
      console.log(this.nameUser + this.email)
    },
    changeTypeLogin() {
      this.typeLogin =! this.typeLogin
      this.nameUser = null
      this.password = null
      this.secondPassword = null
      this.email = null
    }
  },
}
</script>

<style scoped>
.form {
  width: 60vw;
  min-width: 300px;
  max-width: 400px;
  height: 360px;
  background-color: var(--bg-secondary);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  grid-template-rows: 1fr 80px;
  gap: 20px;
}
.form__content {
  display: grid;
  grid-template-rows: 40px repeat(4, 30px);
  gap: 10px;
  height: 200px;
}
.form__content h2 {
  text-align: center;
}
.input__group {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}
.form__actions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.form__actions button:nth-child(1) {
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  background-color: var(--bg-purple);
}

.form__actions button:nth-child(2) {
  width: auto;
  height: 20px;
  background-color: transparent;
  font-size: 12px;
  opacity: 1;
}
.form__actions button:nth-child(2) span {
  color: var(--bg-white);
  font-weight: 200;
}
.form__actions button:nth-child(2) strong {
  color: var(--bg-purple);
}
</style>
