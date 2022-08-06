<template>
  <div class="headerList">
    <span class="headerList__text">
      DNI
    </span>
    <span class="headerList__text">
      Date Birth
    </span>
    <span class="headerList__text">
      Gender
    </span>
    <span class="headerList__text">
      Age
    </span>
    <span class="headerList__text">
      State
    </span>
    <span class="headerList__text">
      Actions
    </span>
  </div>
</template>
<script>
export default {
  name: 'vue-header-list',
  components: {}
}
</script>
<style scoped>
.headerList {
  background-color: var(--bg-dark-grey);
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr) repeat(2, 30px) 70px;
  box-sizing: border-box;
  padding: 10px 15px 10px 0px;
  border-radius: 5px;
  margin-bottom: 10px;
  opacity: .7;
}
.headerList__text {
  font-size: 12px;
  line-height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 870px){
  .headerList {
    grid-template-columns: repeat(3, 1fr) repeat(2, 60px) 70px;
  }
  .headerList__text {
    font-size: 14px;
    line-height: 14px;
  }
}
</style>