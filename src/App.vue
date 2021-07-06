<template>
  <div id="app" ref="pageBox">
    <el-scrollbar class="scrollbar">
      <div id="appBox">
        <page_nav></page_nav>
        <div class="page-main-box" ref="pageMainBox">
          <router-view/>
        </div>
        <page_foot></page_foot>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import page_nav from 'components/page-item/page-nav'
import page_foot from 'components/page-item/page-foot'

export default {
  name: 'App',
  components: {
    'page_foot': page_foot,
    'page_nav': page_nav
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    fixBox() {
      this.clientHeight = window.innerHeight
      this.clientWidth = window.innerWidth
      this.$refs.pageMainBox.style.minHeight = this.clientHeight - 61 - 44 - 120 + 10 + 'px'
      this.$refs.pageBox.style.height = this.clientHeight + 'px'
      this.$refs.pageBox.style.widows = this.clientWidth + 'px'
    }
  },
  mounted() {
    this.fixBox()
    const that = this
    window.onresize = () => {
      return (() => {
        that.fixBox()
      })()
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
  text-decoration: none;
  list-style-type: none;
}

#app {
  font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  overflow: hidden;
  width: 100%;
  min-width: 1100px;
}

#appBox {
  width: 1100px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
}

.page-main-box {
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
}

.scrollbar {
  height: 100%;
}

.el-scrollbar__wrap {
  overflow: auto;
}

.el-select-dropdown .el-scrollbar .el-scrollbar__wrap {
  overflow: scroll;
}
</style>
