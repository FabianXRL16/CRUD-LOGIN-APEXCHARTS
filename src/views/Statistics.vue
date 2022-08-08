<template>
  <div class="statistics">
    <div class="header__stadistics">
      <h2>Estatistics</h2>
      <router-link to="/">
        <font-awesome-icon class="icon" icon="house" />
      </router-link>
    </div>
    <div class="container__charts">
      <div class="gender__stadistics">
        <h2>Chart by Gender</h2>
        <apexchart
          class="chart"
          type="donut"
          :width="isMobile ? '90%' : '400'"
          :options="gender.options"
          :series="gender.series"
        ></apexchart>
      </div>
      <div class="gender__stadistics">
        <h2>Chart by Date of Birth</h2>
        <apexchart
          class="chart"
          type="bar"
          :width="isMobile ? '90%' : '400'"
          :options="dateBirths.options"
          :series="dateBirths.series"
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
    }
  },
  computed: {
    gender() {
      const users = this.$store.state.users
      let series = users.reduce(
        function (newObject, user) {
          if (user.gender) {
            newObject.Male.push(user)
          } else {
            newObject.Female.push(user)
          }
          return newObject
        },
        { Male: [], Female: [] }
      )
      return {
        options: {
          labels: ['Male', 'Female'],
        },
        series: [series.Male.length, series.Female.length],
      }
    },
    dateBirths() {
      if(localStorage.getItem('bdLocal')){
        const users = JSON.parse(localStorage.getItem('bdLocal'))
        let filterDate = users.reduce(function (r, a) {
          r[a.birthDate.substring(0,4)] = r[a.birthDate.substring(0,4)] || []
          r[a.birthDate.substring(0,4)].push(a)
          return r
        }, Object.create(null))
  
        let arr = []
  
        Object.values(filterDate).map((i) => arr.push(i.length))
  
        return {
          options: {
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              },
            },
            xaxis: {
              categories: Object.keys(filterDate),
            },
          },
          series: [{ data: arr }],
        }
      } else {
        const users = this.$store.state.users
        let filterDate = users.reduce(function (r, a) {
          r[a.birthDate.getFullYear()] = r[a.birthDate.getFullYear()] || []
          r[a.birthDate.getFullYear()].push(a)
          return r
        }, Object.create(null))
  
        let arr = []
  
        Object.values(filterDate).map((i) => arr.push(i.length))
  
        return {
          options: {
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              },
            },
            xaxis: {
              categories: Object.keys(filterDate),
            },
          },
          series: [{ data: arr }],
        }
      }
    },
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
}
.container__charts {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}
.header__stadistics {
  display: flex;
  justify-content: space-between;
}
.header__stadistics a {
  color: var(--bg-white);
}
.title__stadistics {
  text-align: center;
  font-size: 14px;
}
:deep(.apexcharts-legend-text) {
  color: var(--bg-white) !important;
}
:deep(.apexcharts-xaxis-label),
:deep(.apexcharts-yaxis-label) {
  fill: var(--bg-white) !important;
}
.gender__stadistics {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
@media screen and (min-width: 870px) {
  .statistics {
    width: 550px;
    height: 550px;
    min-height: 410px;
    gap: 40px;
  }
  .container__charts {
    gap: 50px;
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
