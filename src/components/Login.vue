<template>
 <div id="login">
   <a @click="register=true" :class="{'active':register==true}">Register</a>
   <a @click="register=false" :class="{'active':register==false}">Log in</a>
   <div class="loginDetail">
     <Register v-if='register==true' transition="fade"></Register>
     <Signin v-if='register==false' transition="fade"></Signin>
   </div>
 </div>
</template>
<script type="text/javascript">
 import Register from './Register'
 import Signin from './SignIn'

 export default {
  name:'Login',
  components:{
   Register,Signin
  },
  data() {
   return {
    register:false
   }
  }
 }
</script>
<style type="style/css">
 #login{
  margin: 0 auto;
  position: relative;
  width:500px;
 }

 #login>a{
  text-align: none;
  margin:0 2em;
  font-size: 20px;
 }

 #login>a:hover{
   cursor: pointer;
 }

 #login .active{
  border-bottom: 2px solid #0f88eb;
  color: #0f88eb;
 }

 #login .fade-transition{
  transition: all .s ease-in;
  overflow: hidden;
 }

 #login .fade-enter,#login .fade-leave{
  opacity: 0;
  transform:scaleX(0);
 }

</style>