<!-- eslint-disable -->
<template>
<div>
   <ul>
    <li v-for='item in repositories'>
     <p>{{item.repname}}</p>
     <p>{{item.author}}</p>
     <p>{{item.childrenRepNb}}</p>
    </li>
   </ul>
   <a @click.stop="signOut">Log out</a>
 </div>
</template>

<script type="text/javascript">
 export default{
   name:'repository',
   data: function () {
     return {
       repositories: [],
       signIn:'/login'
     }
   },
   ready: function () {
     this.$http.post('/getReps').then(
    function (res) {
      console.log(res)
      this.$set('repositories', res.data.data)
    },
    function (res) {
      console.log(res)
    })
   },
   methods:{
    signOut:function(){
      this.$route.router.go('/login');
    }
   }
 }
</script>