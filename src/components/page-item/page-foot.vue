<template>
  <div class="page-foot">
    <p>
      <el-divider></el-divider>
      Copyright &copy; 2017-{{ new Date().getFullYear() }} ZUCC-ACM-LAB. All Rights Reserved.<br>
      Powered by
      <el-link type="primary" href="https://github.com/Hsueh-Xue/view-oj-web">Hsueh</el-link>
<!--      <span class="build-version">Build at {{ buildVersion }} [Web] & {{ $store.state.backendVersion }} [Server]</span>-->
    </p>
  </div>
</template>

<script>
export default {
  name: "page-foot",
  data() {
    return {
      buildVersion: '',
    }
  },
  created() {
    // this.buildVersion = document.getElementById("app-build-version").innerHTML.replace(" GMT+0800 (GMT+08:00)", "")
  }
}
</script>

<style scoped>

</style>
