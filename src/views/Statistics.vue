<template>
  <div class="statistics">
    <div class="header__stadistics">
      <router-link to="/">
        <font-awesome-icon class="icon" icon="house" />
      </router-link>
    </div>
    <div class="container__charts">
      <div class="gender__stadistics">
        <h2>Chart by Gender</h2>
        <apexchart
          class="chart"
          :width="isMobile ? '90%' : '500'"
          type="bar"
          :options="options"
          :series="series"
        ></apexchart>
      </div>
      <div class="gender__stadistics">
        <h2>Chart by Gender</h2>
        <apexchart
          class="chart"
          :width="isMobile ? '90%' : '500'"
          type="bar"
          :options="options"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  components: {},
  data() {
    return {
      isMobile: true,
      chart: true,
      options: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    }
  },
  mounted() {
    this.isMobile = screen.width <= 870
  },
}
</script>

<style scoped>
.statistics {
  width: 80vw;
  height: 80vh;
  display: grid;
  grid-template-rows: 25px 1fr;
  gap: 40px;
}
.container__charts {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}
.header__stadistics {
  display: flex;
  justify-content: flex-end;
}
.header__stadistics a {
  color: var(--bg-white);
}
.title__stadistics {
  text-align: center;
  font-size: 14px;
}
.gender__stadistics {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 870px) {
  .statistics {
    width: 550px;
    height: 550px;
    min-height: 410px;
  }
  .container__charts {
    overflow-y: scroll;
  }
  .container__charts::-webkit-scrollbar {
    width: 5px;
  }

  .container__charts::-webkit-scrollbar-thumb {
    width: 5px;
    border-radius: 4px;
    background-color: var(--bg-white);
  }

  .container__charts::-webkit-scrollbar-thumb:hover {
    background: var(--bg-primary);
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
</style>
