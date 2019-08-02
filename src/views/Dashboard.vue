<template>
  <div class="dashboard">
    <!-- title of the page -->
    <div class="title"><h1>Dashboard</h1></div>
    <!-- dashboard box with information welcoming user and displaying message -->
     <div class="container">
       <h2 class="intro">Welcome {{ NameData }} !</h2>
       <p>Let's sign up your email now {{ EmailData }} </p>
     </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import { mapState } from "vuex";
export default {
  data() {
    return {
      userData: {
        name: "",
        email: ""
      }
    }
  },
    // updating the dashboard with data that was inputted in the form by the user  
  computed: {
    ...mapGetters(["userName"]),
    ...mapGetters(["userEmail"]),

    NameData () {
    return this.userName
    },
    EmailData(){
    return this.userEmail
    },
      
  }
}
</script>

<style>
.title {
  margin: 20px;
  padding-top: 10px;
  max-width:600px;
	width:100%;  
}
.intro {
  text-align-last: center;
  display: inline-block
}
.container {
  max-width:600px;
	width:100%;
	margin: 30px auto;
  border-radius: 20px;
  background-color: #f2f2f2;
  padding: 20px;
  padding-bottom: 60px;
}
.el-button {
    float: right;
    margin-bottom: 10px !important;
}
</style>
