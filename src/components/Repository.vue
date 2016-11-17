<!-- eslint-disable -->
<template>
 <ul>
  <li v-for='item in repositories'>
   <p>{{item.repname}}</p>
   <p>{{item.author}}</p>
   <p>{{item.childrenRepNb}}</p>
  </li>
 </ul>
</template>

<script type="text/javascript">
 export default{
   data: function () {
     return {
       repositories: []
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
   }
 }
</script>