<template>
  <div class="loginBox">
      <h2>CRM客户管理系统</h2>
      <h3>为保护企业数据的安全，请妥善保管密码</h3>
      <div>
          <el-input v-model="username" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
          <el-input v-model="password" placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
          <el-button type="primary">登录</el-button>
      </div>
      <p>XXXX技术有限公司 京IC2134567号 京公安网安备1234123</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() { 
      console.log(100);
      
    return {
        username:"",
        password:""
    }
  }
 }
</script>

<style lang="" scoped>

</style>