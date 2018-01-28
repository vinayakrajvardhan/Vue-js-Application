<template>
    <div>
      <ul>
        <li v-for="i in array_element">{{i}}</li>
      </ul>
    </div>
</template>

<script>

    export default {
      name: "again",
      components:{

      },
      data(){
          return{
            array_element:["one","two"]
          }
      }
    }
</script>

<style scoped>
ul{
  color:orangered;
}
</style>
