<template>
  <div class="radioButton">
    <label>
      <input type="radio" name="state" checked />
      <span @click="keyUpCustom('Active')">Active</span>
    </label>
    <label>
      <input type="radio" name="state" />
      <span @click="keyUpCustom">Disabled</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'vue-radio-button',
    methods: {
      keyUpCustom(newState) {
        this.$emit('actionRadio', newState)
      },
    },
}
</script>
<style scoped>
.radioButton {
  height: 100%;
  width: 100%;
  padding: 0px 10px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: var(--bg-dark-grey);
  color: var(--bg-white);
  display: flex;
}
input {
    display: none;
}
label {
    cursor: pointer;
    display: flex;
    align-items: center;
}
label span{
    padding-right: 20px;
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    line-height: 14px;
    margin-top: 3px;
}
label span::before {
    content: "";
    background-color: var(--bg-secondary);
    border: 2px solid var(--bg-white);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transition: .3s ease;
    margin: -3px 5px 0px 0px;
}
input:checked + span::before {
    background-color: var(--bg-primary);
}
</style>
