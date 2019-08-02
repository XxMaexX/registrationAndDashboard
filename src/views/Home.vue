<template>
<!-- start of form -->
<div class="SignUp">
      <h2>Sign Up!</h2>
  <div class="basicform">
<el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
      <!-- Input full name in the form-->
  <el-form-item label="Full Name" prop="name">
      <el-input placeholder="Mia Welsh" v-model="ruleForm.name"></el-input>
  </el-form-item>
      <!-- Input email in the form -->
  <el-form-item label="Email" prop="email">
      <el-input placeholder="mia.welsh@hotmail.com" v-model="ruleForm.email"></el-input>
  </el-form-item>
      <!-- Input password in the form -->
  <el-form-item label="Password" prop="pass">
      <el-input placeholder="Please input password" v-model="ruleForm.input" show-password></el-input>
  </el-form-item>
      <!-- once form is completed, user's must click the submit button and will bring them to the dashboard page -->
    <router-link to="/dashboard">
    <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>    
    </router-link>
</el-form>
  </div>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    // password user inputted in the form
      var validatePass = (rules, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          email: '',
          pass: ''
        }
      };
    },
    methods: {
      // pop up when form is submitted 
      ...mapActions(["updateUsers"]),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        }),
        // submitting to the dashboard with the data that was inputted in the form by the user
        this.updateUsers({
          Name: this.ruleForm.name,
          Email: this.ruleForm.email,
          Password: this.ruleForm.pass
        });
      }
    }
  }
</script>

<style>
.SignUp {
  max-width:400px;
	width:100%;
	margin: 20px auto;
	position:relative;
  border-radius: 20px;
  background-color: #f2f2f2;
  padding: 20px;
  padding-bottom: 40px;
}
h2 {
  display: flex;
}
.el-button {
  float: right;
}
.basicform {
  padding: 20px;
}
  .el-button--primary {
    float: right;
    margin-bottom: 10px !important;
  }
</style>
