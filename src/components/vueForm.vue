<template>
  <div class="form">
    <div class="form__content">
      <h2>Login</h2>
      <div class="input__group">
        <label>User</label>
        <vue-input v-model="user" @actionBtn="actionLogin"/>
      </div>
      <div class="input__group">
        <label>Password</label>
        <vue-input-password v-model="password" @actionBtn="actionLogin"/>
      </div>
      <div class="input__group" v-if="typeLogin">
        <label>Password</label>
        <vue-input-password v-model="secondPassword" @actionBtn="actionLogin"/>
      </div>
      <div class="input__group" v-if="typeLogin">
        <label>Email</label>
        <vue-input v-model="email" @actionBtn="actionLogin"/>
      </div>
      <div v-if="msgNoUser" class="msgAccount">
        <span>Unregistered user</span>
      </div>
      <div v-if="msgNoPassword" class="msgAccount">
        <span>Incorrect password</span>
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
    </div>
  </div>
</template>

<script>
import vueBtn from '@/components/custom/vueBtn.vue'
import vueInput from '@/components/custom/vueInputText.vue'
import vueInputPassword from '@/components/custom/vueInputPassword.vue'
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'vue-todo',
  components: {
    vueBtn,
    vueInput,
    vueInputPassword
},
  data() {
    return {
      user: null,
      password: null,
      secondPassword: null,
      email: null,
      msgNoUser: false,
      msgNoPassword: false,
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
      this.$store.dispatch('findUser', this.user)
      const currentAccount = this.$store.state.accountAccessAttempt
      if(currentAccount){
        this.msgNoUser = false
        const password = this.$CryptoJS.AES.decrypt(currentAccount.password, "12345").toString(this.CryptoJS.enc.Utf8)
        if(password === this.password){
          this.msgNoPassword = false
          setTimeout(this.$router.push({ name: "Home" }), 500)
        }else {
          this.msgNoPassword = true
        }
      } else {
        this.msgNoUser = true
      }
    },
    signUp() {
      let encryptedPassword = this.$CryptoJS.AES.encrypt(this.password, "12345").toString()
      let account = {
        user: this.user,
        password: encryptedPassword,
        email: this.email,
        id: uuidv4()
      }
      this.$store.dispatch('addNewAccount', account)
    },
    changeTypeLogin() {
      this.typeLogin =! this.typeLogin
      this.user = null
      this.password = null
      this.secondPassword = null
      this.email = null
      this.msgNoUser = false
    }
  },
}
</script>

<style scoped>
.form {
  margin-top: 20px;
  width: 100%;
  height: 100%;
  min-height: 300px;
  background-color: var(--bg-secondary);
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
.msgAccount {
  color: #f66363;
  text-align: right;
  font-size: 12px;
}
@media screen and (min-width: 870px) {
  .form {
    width: 60vw;
    min-width: 300px;
    max-width: 400px;
    height: 360px;
    grid-template-rows: 1fr 80px;
    padding: 30px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
}
</style>