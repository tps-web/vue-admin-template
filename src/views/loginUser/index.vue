<template>
	 <div class="app-container">
      <el-button type="primary" icon="el-icon-plus" size="mini" @click="handleAdd">新增</el-button>
    <el-table
      :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号"
        align="center"
        width="60">
      </el-table-column>
       <el-table-column prop="avatar" label="用户头像" align="center" width="120">
        <template slot-scope="scope">
          <!-- <el-avatar :src="scope.row.avatar" :size="36"></el-avatar> -->
          <img :src="scope.row.avatar" width="40" height="40" style="border-radius:50%">
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        width="120"
        prop="username"
        label="用户名">
      </el-table-column>
       <el-table-column
        align="center"
        width="120"
        prop="nickname"
        label="真实姓名">
      </el-table-column>
        <el-table-column prop="sex" label="性别" align="center" width="60">
        <template slot-scope="scope">
          {{scope.row.sex==1?'男':'女'}}
        </template>
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
       <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination v-if="total>0" class="fy" :page-sizes="[10, 20, 30, 40,50]"  :page-size="10" layout="total,sizes,prev, pager, next,jumper" :total="total" background   @current-change="current_change"  />

     <!-- edit or add 模态框 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
         <el-form ref="form" :model="form"  size="medium" label-width="100px" :rules="rules">
            <el-row>
             <el-col :span="16">
               <el-form-item label="用户名" prop="username">
                 <el-input v-model="form.username" placeholder="请输入用户名" />
               </el-form-item>
             </el-col>
            </el-row>
            <el-row  v-if="title=='修改'">
            <el-col :span="16" >
              <el-form-item label="" prop="status">
                   <el-checkbox v-model="changePwd">重置密码</el-checkbox>
              </el-form-item>
            </el-col>
            <el-col :span="16" v-if="changePwd">
              <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" placeholder="请输入密码" show-password :minlength="6" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
           <el-row v-else>
            <el-col :span="16" >
              <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" placeholder="请输入密码" show-password :minlength="6" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-upload
            class="avatar-uploader"
            :action="action"
            ref="upload"
            name="dropFile"
            :show-file-list="false"
            :on-success="uploadSuccess"
            :before-upload="beforeUpload"
          >
           <el-form-item prop="avatar" class="avatar"  label-width="0px">
              <el-input v-model="form.avatar" style="display:none"></el-input>
             <img v-if="form.avatar" :src="form.avatar" name="dropFile" prop="avatar" width="100" height="100"/>
             <i v-else class="el-icon-plus avatar-uploader-icon" style="font-size:28px;;margin-top:30px" ></i>
           </el-form-item>
          </el-upload>
          <el-row>
            <el-col :span="12">
               <el-form-item label="真实姓名" prop="nickname">
                <el-input v-model="form.nickname" placeholder="请输入真实姓名"></el-input>
               </el-form-item>
            </el-col>
            <el-col :span="12">
               <el-form-item label="性别" prop="sex">
                 <el-radio-group v-model="form.sex">
                      <el-radio :label="1">男</el-radio>
                      <el-radio :label="0">女</el-radio>
                  </el-radio-group>
                </el-form-item>
            </el-col>
          </el-row>
         </el-form>
          <div slot="footer">
            <el-button type="primary" @click="submitForm(form)">确定</el-button>
            <el-button @click="cancel">取消</el-button>
          </div> 
    </el-dialog>
</div>
  </template>

<script>
import {getAllUser,deteleId,updateUser,register} from "@/api/loginUser";
import {parseDate} from "@/utils/index";

    export default {
      data() {
        return {
          pagesize:10,
          currentPage:1,
          changePwd:false,
          userList:[], //用户列表
          title:"",
          open:false,
          form:'',
          total:0,
          action:'http://127.0.0.1:7001/saveavatar',
          rules: {
           username:[{required: true,message:'请输入用户名',trigger:'blur'}],
           password: [
            { required: true, message: "请输入用户密码", trigger: "blur" },
            {min: 6, message: '至少6位', trigger: 'change'}
            ],
            avatar: [{ required: true, message: "请上传头像", trigger: "change" }],
            nickname:[{required: true,message:'请输入真实姓名',trigger:'blur'}]
          }
        }
      },
      created(){
      	this.getUserList()
      },
      computed:{
       
      },
      methods:{
         //每页条数
    handleSizeChange(val){
      this.pagesize=val
    },
        //当前页面
    current_change(currentPage) {
      this.currentPage = currentPage
    },
        handleAdd(){
          this.title="添加用户"
          this.open=true
          this.reset()
        },
        submitForm(row){
         this.$refs["form"].validate(valid => {
            if(valid){
              if(this.form.id!=undefined){
              //修改
               if(!this.changePwd){
                delete this.form.password
               }
              updateUser(this.form).then(res=>{
                this.open=false
                this.msgSuccess('修改成功')
                this.getUserList()
              })
           }else {
            //添加
            console.log(this.form)
            register(this.form).then(res=>{
                this.open=false
                this.msgSuccess('添加成功')
                this.getUserList()
            })
          }
          }
         })
        },
        //头像上传成功回调
    uploadSuccess(res) {
      this.form.avatar = res.data.dropFile;
    },
    // upload上传 之前 可以设置文件大小格式等
    beforeUpload(dropFile) {
      return true;
    },
       //请求用户列表
       getUserList(){
         getAllUser().then(res=>{
           var data=parseDate(res.data)
           this.userList=data
           this.total = res.data.length;
         })
       },
       //删除
        handleDelete(row){
           this.$confirm(`是否确认删除用户名称为${row.username}的数据项?`, '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function() {
        return deteleId(row.id)
      }).then((res) => {
            this.msgSuccess('删除成功')
             this.getUserList()
            const totalPage = Math.ceil((this.parameterList.length - id.length) / this.pagesize)  // 总页数 
             this.currentPage = this.currentPage > totalPage ? totalPage : this.currentPage  
             this.currentPage = this.currentPage < 1 ? 1 : this.currentPage 
      })
        },
        //修改
        handleUpdate(row){
            this.reset()
            this.form=row
            this.form.password=""
            this.title="修改"
            this.open=true
        },
        cancel(){
           this.open=false,
           this.reset()
        },
        //重置表单
        reset(){
         this.form = {
          username: undefined,
          password: undefined,
          avatar: undefined,
          sex: 1,
          nickname: undefined,
         }
         this.changePwd=false
        }
      }
    }
  </script>
  <style type="text/css">
.avatar {
  width: 100px;
  height: 100px;
  display: block;
  position: absolute;
  font-size: 28px;
  line-height: 100px;
  color: #999;
  top: 85px;
  right: 60px;
  border: 1px dotted #999;
}
  </style>