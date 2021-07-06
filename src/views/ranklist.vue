<template>
  <div>
    <div v-loading="loading">
      <el-table :data="tableData" :default-sort="{prop: 'rating', order: 'descending'}" style="width: 100%">
        <el-table-column label="Rank" align="center" width="100px">
          <template v-slot="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="Username" align="center">
          <template v-slot="scope">
            <el-link :href="'#/user/'+scope.row.username+'?part=page-top'" :underline="false">
              {{ scope.row.username }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column label="Nickname" align="center">
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
        <el-table-column label="contest" align="center" width="120px" prop="codeforces" sortable
                         :sort-method="function(a,b) {return Number(a.contest_cnt) - Number(b.contest_cnt)}">
          <template v-slot="scope">
            <span>{{ Number(scope.row.contest_cnt) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Cnt" align="center" width="80px" prop="contest" sortable
                         :sort-method="function(a,b) {return Number(a.cnt) - Number(b.cnt)}">
          <template v-slot="scope">
            <span>{{ Number(scope.row.cnt) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="last_CF" align="center" width="120px">
          <template v-slot="scope">
            <p v-if="scope.row.last_cf_date">{{ $moment(scope.row.last_cf_date).fromNow() }}</p>
            <!--            <p v-if="scope.row.last_cf_date">{{ scope.row.last_cf_date }}</p>-->
            <p v-else>无记录</p>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {rating} from "network/user";

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
      if (rating < 1000) return ['#808080', '#808080']
      if (rating < 1200) return ['#88CC22', '#88CC22']
      if (rating < 1400) return ['#008000', '#008000']
      if (rating < 1600) return ['#03A89E', '#03A89E']
      if (rating < 1800) return ['#0000ff', '#0000ff']
      if (rating < 2000) return ['#AA00AA', '#AA00AA']
      if (rating < 2200) return ['#FF8C00', '#FF8C00']
      if (rating < 2400) return ['#ff0000', '#FF8C00']
      if (rating < 2700) return ['#ff0000', '#ff0000']
      if (rating < 3000) return ['#FF00FF', '#ff0000']
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
            for (let item of res.data) {
              this.tableData.push(item)
            }
            this.reFreshChart()
          })
    }
  }
}
</script>

<style scoped>
.tableBox {
  width: 1000px;
  margin-right: 20px;
}

.ColoredName {
  font-weight: 600;
  padding: 3px 0 3px 0;
  border-radius: 5px;
}
</style>
