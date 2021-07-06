<template>
  <div class="page-foot">
    <p>
      <el-divider></el-divider>
      Copyright &copy; 2021-{{ new Date().getFullYear() }} HZNU-ACM-LAB. All Rights Reserved.<br>
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
.page-foot {
  height: 120px;
  width: 100%;
  text-align: center;
}

p {
  color: #909399;
  font-size: 14px;
  position: relative;
  line-height: 100%;
  top: 50%;
  transform: translate(0, -50%);
}
</style>
