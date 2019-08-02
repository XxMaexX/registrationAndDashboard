<template>
 <div id="navigation-view">
 <ul>
     <h1>State Manager</h1>
     <!-- navigation links for each page -->
 <li><router-link :to=" { name: 'dashboard' } ">Dashboard</router-link> </li>
 <li><router-link :to=" { name: 'home' } ">Sign Up</router-link> </li>
 </ul>
 </div>
</template>

<style scoped lang='css'>

#navigation-view ul {
  padding: 45px;
}

ul h1 {
    position: absolute;
    color: white;
    margin-top: none;
    padding-left: 20px;
    left: 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #719bd5;
}

li {
  float: right;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #2f3e65;
}

.active {
  background-color: #2f3e65;
}

</style>