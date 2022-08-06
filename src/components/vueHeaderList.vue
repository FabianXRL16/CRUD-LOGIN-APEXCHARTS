<template>
  <div class="headerList">
    <span class="headerList__text">
      <strong>DNI</strong>
      <font-awesome-icon class="icon" icon="address-card" />
    </span>
    <span class="headerList__text">
      <strong>Date Birth</strong>
      <font-awesome-icon class="icon" icon="cake-candles" />
    </span>
    <span class="headerList__text">
      <strong>Gender</strong>
      <font-awesome-icon class="icon" icon="mars-and-venus" />
    </span>
    <span class="headerList__text">
      <strong>Age</strong>
      <font-awesome-icon class="icon" icon="calendar" />
    </span>
    <span class="headerList__text">
      <strong>State</strong>
      <font-awesome-icon class="icon" icon="flag" />
    </span>
    <span class="headerList__text"> Actions </span>
  </div>
</template>
<script>
export default {
  name: 'vue-header-list',
  components: {},
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
  opacity: 0.7;
}
.headerList__text {
  font-size: 12px;
  line-height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerList__text .icon {
  display: flex;
}
.headerList__text strong {
  display: none;
}
@media screen and (min-width: 870px) {
  .headerList {
    grid-template-columns: repeat(3, 1fr) repeat(2, 60px) 70px;
  }
  .headerList__text {
    font-size: 14px;
    line-height: 14px;
  }
  .headerList__text .icon {
    display: none;
  }
  .headerList__text strong {
    display: flex;
  }
}
</style>
