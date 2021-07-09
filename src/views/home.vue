<template>
  <div>
    <div class="dataBox">
      <el-date-picker
          v-model="inputDate"
          type="daterange"
          unlink-panels
          range-separator="to"
          start-placeholder="Begin Date"
          end-placeholder="End Date"
          :shortcuts="shortcuts"
          @change="changeOverviewDate">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
// import OverviewChart from 'components/charts/overview-chart'

export default {
  name: "home",
  components: {
    // 'overview-chart': OverviewChart
  },
  data() {
    return {
      isRefresh: true,
      inputDate: '',
      shortcuts: [{
        text: '最近一周',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
          return [start, end]
        })(),
      }, {
        text: '最近一个月',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
          return [start, end]
        })(),
      }, {
        text: '最近三个月',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
          return [start, end]
        })(),
      }],
    }
  },
  methods: {
    changeOverviewDate() {
      let data = {
        data: {
          start_date: null,
          end_date: null,
        },
      }
      if (this.inputDate !== null && this.inputDate.length === 2) {
        data.data.start_date = this.inputDate[0]
        data.data.end_date = this.inputDate[1]
      }
      this.$store.commit('updateOverview', data)
    },
    refreshChart() {
      this.isRefresh = false
      this.$nextTick(function () {
        this.isRefresh = true
      })
    }
  }
}
</script>

<style scoped>
.dataBox {
  position: relative;
  width: 350px;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
