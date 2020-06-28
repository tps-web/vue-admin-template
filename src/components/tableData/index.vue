<template>
  <div>
    <div class="demo-input-suffix fl">
      <el-input
        v-model="input21"
        placeholder="请输入关键字查询"
        prefix-icon="el-icon-search"
        class="inp"
      />
      <el-button type="primary" size="small" class="btn" @click="cheap()">查询</el-button>
    </div>
    <div class="container_table">
      <el-table
        :data="searchData"
        stripe
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          prop="appname"
          label="APP名称"
          sortable
          width="180"
        />
        <el-table-column
          prop="apkname"
          label="包名"
          width="180"
        />
        <el-table-column
          prop="type"
          sortable
          label="类型"
        />
        <el-table-column
          prop="comp_name"
          sortable
          label="运营企业名称"
        />
        <el-table-column
          prop="type_number"
          label="版本号"
        />
        <el-table-column
          prop="update_date"
          sortable
          label="更新时间"
        />
        <el-table-column
          prop="download_num"
          sortable
          label="下载量（万）"
        />
        <el-table-column label="操作">
          <template>
            <el-button type="primary" el-icon-delete size="small">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
      <el-pagination
        class="fy"
        layout="prev, pager, next"
        :total="total"
        background
        @current-change="current_change"
      />
    </div>

  </div>
</template>
<script>
export default {
  name: 'List11',
  data() {
    return {
      total: 1000, // 默认数据总数
      pagesize: 9, // 每页的数据条数
      currentPage: 1, // 默认开始页面
      istag: true,
      input: '',
      input21: '',
      value5: [],
      searchData: []

    }
  },
  created: function() {
    this.total = this.tableData.length
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'th'
      }
      return ''
    },
    current_change: function(currentPage) {
      this.currentPage = currentPage
    },
    cheap() {
      const search = this.input21
      const _this = this
      // console.log(search)
      if (search) {
        _this.searchData = _this.tableData.filter(function(product) {
          // console.log(product)
          return Object.keys(product).some(function(key) {
            // console.log(String(product[key]).toLowerCase().indexOf(search))
            if (String(product[key]).toLowerCase().indexOf(search) === 0) {
              return String(product[key]).toLowerCase().indexOf(search) > -1
            }
          })
        })
        if (!_this.searchData.length) {
          _this.$message({
            message: '搜索不存在'
          })
        }
      } else if (search === '') {
        _this.searchData = []
        // console.log(_this.searchData.length)
        _this.$message({
          message: '请输入内容'
        })
      }
      // console.log(str)
      // this.tableData.forEach(element => {
      //   if (element.appname === str) {
      //     this.$message({
      //       message: '存在',
      //       type: 'success'
      //     })
      //   } else {
      //     this.$message('不存在')
      //   }
      // })
    }
  }
}
</script>
<style>

.fl{
    float: right;
    margin-right: 50px;
}
    .fy{
        text-align:center;
        margin-top:30px;
    }
    .title{
        height:100%;
    }
    .inp{
      width: 250px;
       display:inline-block;
    }
    .btn{
      display:inline-block;
    }
</style>
