<template>
	 <div class="app-container">
	  <!-- <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
      <el-form-item label="用户名称" prop="username">
        <el-input
          v-model="queryParams.username"
          placeholder="请输入用户名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="用户类型" prop="dictType">
        <el-select
          v-model="queryParams.dictType"
          placeholder="请选择用户类型"
          size="small"
          @change="gradeChange"
        >
          <el-option label="管理员" value="0" />
          <el-option label="超级管理员" value="1" />
          <el-option label="普通用户" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form> -->
    <el-table
      :data="userList"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号"
        align="center"
        width="50">
      </el-table-column>

       <el-table-column prop="avatar" label="用户头像" align="center">
        <template slot-scope="scope">
          <!-- <el-avatar :src="scope.row.avatar" :size="36"></el-avatar> -->
          <img :src="scope.row.avatar" width="40" height="40" style="border-radius:50%">
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        prop="username"
        label="用户名">
      </el-table-column>
       <el-table-column
        align="center"
        prop="nickname"
        label="真实姓名">
      </el-table-column>
      <el-table-column
        prop="sex"
        align="center"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="created_time"
        align="center"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="login_time"
        align="center"
        label="最后登录时间">
      </el-table-column>
         <el-table-column
        align="center"
        prop="login_ip"
        label="最后登录ip">
      </el-table-column>
    </el-table>
</div>
  </template>

  <script>
import {getAllUser} from "@/api/loginUser";

import {parseDate} from "@/utils/index";

    export default {
      data() {
        return {
          userList:[] //用户列表
        }
      },
      created(){
      	getAllUser().then(res=>{
      		var data=parseDate(res.data)
      		console.log(data)
      		this.userList=data
      	})
      }
    }
  </script>