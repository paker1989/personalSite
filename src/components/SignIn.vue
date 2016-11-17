<template>
 <div id="signin">
  <div class="signin-input">
   <input placeholder="Email" v-model="email"/>
  </div>
  <div class="signin-input">
   <input type="password" placeholder="Password" v-model="password"/>
  </div>
  <a class="login-button" @click.stop="signIn">Sign in</a>
 </div>
</template>
<script type="text/javascript">


 export default {
  name:'Inscription',
  data() {
   return {
    email:'',
    password:''
   }
  },
  methods:{
   signIn: function() {
   var obj = {password:this.password};
    this.$http.post('/signIn',obj).then(function(res){
     console.log('yes');
     console.log(res.data);
     if(res.data.authenticatedUsers.length>=1)
     {
      alert('signed in!');
     }else{
      alert('failed');
     }

    },
    function(res){
     console.log('no');
    });
   }
  }
 }
</script>
<style type="text/css">
 #signin{
  margin: 0 auto;
  width: 400px;
 }
 .signin-input{
  width: 100%;
  padding: .7em 0;
  border:1px solid rgba(15,82,135,.25);
 }

 .signin-input input{
  border:none;
  width:100%;
  height:100%;
  font-weight:bold;
  font-size:16px;
  color:#9A9EAB;
  outline:none;
  padding:0 .7em;
 }


  #signin .login-button{
  display: block;
  background: linear-gradient(top,#80c3f7,#6bbaf8);
  color: #fff;
  width: 100%;
  font-size: 20px;
  padding: .4em 0;
  margin-top: 1em;
 }
</style>