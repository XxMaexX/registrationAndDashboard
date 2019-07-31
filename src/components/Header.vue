<template>
 <div id="navigation-view">
 <ul>
     <h1>State Manager</h1>
     <!-- navigation links for each page -->
 <li><router-link :to=" { name: 'Dashboard' } ">Dashboard</router-link> </li>
 <li><router-link :to=" { name: 'Home' } ">Sign Up</router-link> </li>
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
  background-color: #F99A9C;
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
  background-color: #BB5769;
}

.active {
  background-color: #BB5769;
}

</style>