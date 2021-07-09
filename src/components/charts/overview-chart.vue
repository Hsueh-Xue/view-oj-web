<template>
  <div class="chart-box">
    <div class="chartTitle">
      <b>Training status chart</b>
    </div>
    <div class="chartSubTitle">
      {{ ('Last week\'s data') }}
    </div>
    <!--    <ve-histogram-->
    <!--        :data="chartData"-->
    <!--        :loading="loading"-->
    <!--        :extend="extend"-->
    <!--        :legend-visible="false"-->
    <!--        :mark-line="markLine"-->
    <!--        :events="chartEvents"-->
    <!--        width="100%"-->
    <!--        height="800px">-->
    <!--    </ve-histogram>-->
  </div>
</template>

<script>
export default {
  name: "overview-chart",
  data() {
    return {}
  },
  methods: {
    mounted() {
      // this.$bus.$on("click", this.add);
    },
  },
  created() {
    // this.getData()
  }
}
</script>

<style scoped>
.chart-box {
  margin-top: 50px;
}

.chartTitle {
  text-align: center;
  font-size: 25px;
  margin-top: 30px;
}

.chartSubTitle {
  text-align: center;
  margin-top: 5px;
  color: #808080;
  font-size: 13px;
}
</style>
