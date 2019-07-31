<template>
  <div>
    <!-- Basic Form for users to input the following items -->
    <el-form class="contactForm">
      <h1>test</h1>
      <!-- Input first name in the form-->
      <el-form-item label="Full Name">
        <el-input placeholder="Mia Welsh"></el-input>
      </el-form-item>
      <!-- Input email in the form -->
      <!-- <el-form-item label="Email" prop="email">
        <el-input placeholder="mia.welsh@hotmail.com"></el-input>
      </el-form-item> -->
      <!-- Input password in the form -->
      <!-- <el-input placeholder="Please input password" show-password></el-input> -->
      <!-- once form is completed, user's must click the submit button -->
      <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
      return {
        fullName: '',
        email: '',
        input: ''
      }
    },
  name: "contactForm",
    // submit button
      methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.openDialog = true;
        } else {
          return false;
        }
      });
    },
    // resets after submitting
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>

/* style for pop up alert message */

.container {
  margin: auto 50px;
}

/* .dialog-container {
  display: flex;
  margin: auto 20px;
  text-align: left;
  
  ul {
    list-style: none;
  }
} */
</style>
