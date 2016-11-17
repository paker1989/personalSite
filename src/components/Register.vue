<template>
 <div id="register">
  <div class="register-input">
   <input placeholder="name"/>
  </div>
  <div class="register-input">
   <input placeholder="Email" autocomplete="off"/>
  </div>
  <div class="register-input">
   <input type="password" placeholder="Password" autocomplete="off"/>
  </div>
  <a class="login-button">Register</a>
 </div>
</template>
<script type="text/javascript">


 export default {
  name:'Register'
 }
</script>
<style type="text/css">
 #register{
  margin: 0 auto;
  width: 400px;
 }
 .register-input{
  width: 100%;
  padding: .7em 0;
  border:1px solid rgba(15,82,135,.25);
  color: green;
 }

 .register-input input{
  border:none;
  width:100%;
  height:100%;
  font-weight:bold;
  font-size:16px;
  color:#9A9EAB;
  outline:none;
  padding:0 .7em;
 }

  #register .login-button{
  display: block;
  background: linear-gradient(top,#80c3f7,#6bbaf8);
  color: #fff;
  width: 100%;
  font-size: 20px;
  padding: .4em 0;
  margin-top: 1em;
 }
</style>