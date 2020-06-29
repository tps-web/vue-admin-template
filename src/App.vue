<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  }
}
</script>
<style>
/* 用来设置当前页面element全局table 选中某行时的背景色 */
/* .el-table__body tr.current-row>td{
  background-color: #f19944 !important;
  color: #f19944;  设置文字颜色，可以选择不设置
} */
/* 用来设置当前页面element全局table 鼠标移入某行时的背景色*/
/* .el-table--enable-row-hover .el-table__body tr:hover>td {
  background-color: #f19944;
 color: #f19944;  /* 设置文字颜色，可以选择不设置
} */
.app-main{
  margin-top: 40px;
}
.fy{
  text-align: center;
}
</style>
