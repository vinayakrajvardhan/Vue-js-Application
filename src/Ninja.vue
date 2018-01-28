<template>
  <div >
<h1>List of Ninjas</h1>
    <ul>
      <li v-for="i in ninjas">{{i}}</li>
    </ul>
    <again></again>

  </div>
</template>

<script>
  import Again from './Again'
  export default {
    components:{
      'again':Again
    },

    data () {
      return {
        title:"Ninja App ",
        ninjas:["mario","lee","yoshi"]

      }
    }

  }
</script>

<style scoped>
  h1{
    color:maroon;
  }
  ul{
    color:red
  }

</style>
