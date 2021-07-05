<template>
  <div>
    <div v-loading="loading">
      <el-table :data="tableData" :default-sort="{prop: 'rating', order: 'descending'}" style="width: 100%">
        <el-table-column label="Rank" align="center" width="100px">
          <template v-slot="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="Userid" align="center">
          <template v-slot="scope">
            <el-link :href="'#/user/'+scope.row.username+'?part=page-top'" :underline="false">
              {{ scope.row.username }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column label="Username" align="center">
          <template v-slot="scope">
            <el-link :href="'#/user/'+scope.row.username+'?part=page-top'" :underline="false">
              <b class="ColoredName" :style="getNameColorInfo(scope.row, 2)">
                                    <span :style="'border-top-left-radius:5px; border-bottom-left-radius: 5px;' +
                                         'padding:3px; padding-right:0px;'+getNameColorInfo(scope.row, 0)">{{
                                        scope.row.nickname[0]
                                      }}</span>
                <span :style="'border-top-right-radius:5px; border-bottom-right-radius: 5px;' +
                                         'padding:3px; padding-left:0px;'+getNameColorInfo(scope.row, 1)">{{
                    scope.row.nickname.slice(1)
                  }}</span>
              </b>
            </el-link>
          </template>
        </el-table-column>
        <el-table-column label="Rating" align="center" width="100px" prop="rating" sortable
                         :sort-method="function(a,b) {return Number(a.rating) - Number(b.rating)}">
          <template v-slot="scope">
            <el-link :href="'#/user/'+scope.row.username+'?part=rating'" :underline="false">{{
                scope.row.rating
              }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column label="CF" align="center" width="80px" prop="codeforces" sortable
                         :sort-method="function(a,b) {return Number(a.rating) - Number(b.rating)}">
          <template v-slot="scope">
            <el-link :href="'#/user/'+scope.row.username+'?part=cf-rating'" :underline="false">{{
                Number(scope.row.rating)
              }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column label="Cnt" align="center" width="80px" prop="contest" sortable
                         :sort-method="function(a,b) {return Number(a.cnt) - Number(b.cnt)}">
          <template v-slot="scope">
            <span>{{ Number(scope.row.cnt) }}</span>
          </template>
        </el-table-column>
<!--        <el-table-column label="last_CF" align="center" width="100px">-->
<!--          <template v-slot="scope">-->
<!--                        <p v-if="scope.row.last_cf_date">{{ comverTime(scope.row.last_cf_date).fromNow() }}</p>-->
<!--&lt;!&ndash;            <p v-if="scope.row.last_cf_date">{{ scope.row.last_cf_date }}</p>&ndash;&gt;-->
<!--            <p v-else>无记录</p>-->
<!--          </template>-->
<!--        </el-table-column>-->
      </el-table>
    </div>
  </div>
</template>

<script>
import {rating} from "network/user/user_ranklist";

export default {
  name: "ranklist",
  data() {
    return {
      loading: false,
      isRefresh: true,
      tableData: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getNameColorInfo(row, index) {
      let s = ''
      if (row.custom_color) {
        return row.custom_color[index]
      }
      let color = this.getNameColor(row)
      let back_color = this.getNameColorBack(row)
      s += 'color: ' + color[index] + ';'
      s += 'background-color: ' + back_color[index] + ';'
      return s
    },
    getNameColor(row) {
      let rating = row.rating
      if (rating <= 1500) return ['#808080', '#808080']
      if (rating <= 1600) return ['#008000', '#008000']
      if (rating <= 1800) return ['#03a89e', '#03a89e']
      if (rating <= 2000) return ['#0000ff', '#0000ff']
      if (rating <= 2200) return ['#aa00aa', '#aa00aa']
      if (rating <= 2500) return ['#ff8c00', '#ff8c00']
      if (rating <= 2800) return ['#ff7777', '#ff7777']
      if (rating <= 3000) return ['#ff0000', '#ff0000']
      return ['#000000', '#ff0000']
    },
    getNameColorBack(row) {
      (row)
      return ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)']
    },
    reFreshChart() {
      this.isRefresh = false
      this.$nextTick(function () {
        this.isRefresh = true
        this.loading = false
      })
    },
    getData() {
      this.loading = true
      rating()
          .then(res => {
            console.log(res)
            for (let item of res.data) {
              console.log(item);
              this.tableData.push(item)
            }
            this.reFreshChart()
          })
      // that.$http.get(api + '/v2/user/rating')
      //     .then(data => {
      //       that.tableData = []
      //       for (let item of data.data.data) {
      //         if (that.showAll) {
      //           if (!item.is_freshman) that.tableData.push(item)
      //           else if (that.showFreshman) that.tableData.push(item)
      //           continue
      //         }
      //         if (item.is_freshman) {
      //           if (that.showFreshman) that.tableData.push(item)
      //         } else {
      //           if (that.showFreshman || item.status !== 1) continue
      //           that.tableData.push(item)
      //         }
      //       }
      //       that.reFreshChart()
      //     })
      //     .catch(function (error) {
      //       if (error.response) {
      //         that.$message.error(error.response.data.msg)
      //       }
      //     })
    }
  }
}
</script>

<style scoped>

</style>
