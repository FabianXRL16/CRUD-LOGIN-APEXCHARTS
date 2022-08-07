<template>
  <div class="statistics">
    <div class="header__stadistics">
        <router-link to="/">
            <font-awesome-icon class="icon" icon="house" />
        </router-link>
    </div>
    <div class="gender__stadistics">
        <div class="title__stadistics">
            <h2>Chart by Gender</h2>
        </div>
        <div class="chart__stadistics"></div>
    </div>
    <div class="gender__stadistics">
        <div class="title__stadistics">
            <h2>Chart by Age</h2>
        </div>
        <div class="chart__stadistics"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  components: {},
}
</script>

<style scoped>
.statistics {
  border: 1px solid red;
  width: 80vw;
  height: 80vh;
  min-height: 550px;
  display: grid;
  grid-template-rows: 25px repeat(2, 1fr);
  gap: 20px;
}
.header__stadistics {
    display: flex;
    justify-content: flex-end;
}
.header__stadistics a {
    color: var(--bg-white);
}
.gender__stadistics {
    display: grid;
    grid-template-rows: 40px 1fr;
}
.title__stadistics{
    text-align: center;
    font-size: 14px;
}
@media screen and (min-width: 870px) {
  .statistics {
    width: 550px;
    height: 550px;
    min-height: 410px;
  }
}
</style>
