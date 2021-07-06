<template>
  <div id="page-top">
    <el-menu :default-active="$route.path" class="page-nav" style="height:60px;width:100%;z-index:1000"
             mode="horizontal" router>
      <el-menu-item index="/" route="/">Home</el-menu-item>
      <el-menu-item index="/ranklist" route="/ranklist">Ranklist</el-menu-item>
      <template v-if="$store.state.user.userId">
        <el-menu-item :index="'/user/'+$store.state.user.userId"
                      :route="'/user/'+$store.state.user.userId">Userinfo
        </el-menu-item>
      </template>
      <div class="userBox">
        <template v-if="$store.state.user.userId">
          <span style="margin-right: 15px">Welcome,<user_change_box></user_change_box></span>
          <el-button icon="el-icon-user" @click="logout">Logout</el-button>
        </template>
        <template v-else>
          <el-button type="primary" icon="el-icon-user" @click="$router.push('/login')">Login</el-button>
        </template>
      </div>
    </el-menu>
  </div>
</template>

<script>
import user_change_box from 'components/page-item/user-change-box'

export default {
  name: "page-nav",
  components: {
    'user_change_box': user_change_box
  },
  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.page-nav .el-menu-item, /deep/ .page-nav .el-submenu__title {
  font-size: 16px;
}

.userBox {
  position: relative;
  float: right;
  top: 50%;
  transform: translate(0, -50%);
  outline: none;
  font-size: 15px;
}
</style>
