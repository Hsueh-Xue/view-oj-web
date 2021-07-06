<template>
  <div v-if="visible">
    <div class="itemBox">
      <el-checkbox v-model="changeName">I want to change my nickname.</el-checkbox>
      <div v-if="changeName">
        <el-input v-model="name" placeholder="New Name" class="mini-input"></el-input>
      </div>
    </div>
    <div class="itemBox">
      <el-checkbox v-model="changePwd">I want to change my password.</el-checkbox>
      <div v-if="changePwd">
        <el-input v-model="oldPwd" placeholder="Old Password" show-password class="mini-input"></el-input>
        <el-input v-model="newPwd" placeholder="New Password" show-password class="mini-input"></el-input>
        <el-input v-model="newPwd2" placeholder="Confirm New Password" show-password
                  class="mini-input"></el-input>
      </div>
    </div>
    <div class="itemBox">
      <el-checkbox v-model="changeCodeforces">I want to change my codeforces.</el-checkbox>
      <div v-if="changeCodeforces">
        <el-input v-model="codeforcesHandle" placeholder="codeforces handle" show-password
                  class="mini-input"></el-input>
      </div>
    </div>
    <div style="text-align: right; margin-right: 10px">
      <el-button size="mini" type="text" @click="toCancel()">Cancel</el-button>
      <el-button type="primary" size="mini" @click="toSubmit()">Submit</el-button>
    </div>
  </div>
</template>

<script>
import {modifyNickname, modifyPassword, modifyCodeforces} from "network/user";

export default {
  name: "userinfo",
  components: {},
  data() {
    return {
      visible: false,
      changeName: false,
      changePwd: false,
      name: '',
      oldPwd: '',
      newPwd: '',
      newPwd2: '',
      changeCodeforces: false,
      codeforcesHandle: ''
    }
  },
  methods: {
    toCancel() {
      this.changeName = false
      this.changePwd = false
      this.name = this.$store.user.nickname
      this.oldPwd = ''
      this.newPwd = ''
      this.newPwd2 = ''
      this.changeCodeforces = false
      this.codeforcesHandle = ''
    },
    pageInit() {
      this.visible = true
    },
    permissionCheck() {
      if (!this.$store.state.user.username) {
        this.$router.replace('/error401')
      } else {
        this.pageInit()
      }
    },
    toSubmit() {
      if (this.changeName) {
        modifyNickname(this.$store.state.user.userId, this.name)
            .then(res => {
              if (res.code === 0) {
                this.changeName = false
                this.$store.commit('modifyNickname', this.name)
                this.$message.success('修改成功')
                this.toCancel()
              }
            })
      }
      if (this.changePwd) {
        if (this.newPwd === this.newPwd2) {
          modifyPassword(this.$store.state.user.userId, this.oldPwd, this.newPwd)
              .then(res => {
                if (res.code === 0) {
                  this.changePwd = false
                  this.$message.success('修改成功')
                  this.toCancel()
                }
              })
        } else {
          this.$message.error('Entered passwords differ from the another!')
        }
      }
      if (this.changeCodeforces) {
        modifyCodeforces(this.$store.state.user.userId, this.codeforcesHandle)
            .then(res => {
              if (res.code === 0) {
                this.changeCodeforces = false
                this.$message.success('修改成功')
                this.toCancel()
              }
            })
      }
    }
  },
  created() {
    document.title = "Userinfo - viewOJ"
    this.permissionCheck()
  },
}
</script>

<style scoped>
.itemBox {
  margin: 10px;
}

.mini-input {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 230px;
}
</style>
