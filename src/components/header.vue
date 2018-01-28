<template>
  <div>
     <header>
       <h1 v-on:click="changeTitle">{{title}}</h1>
     </header>
  </div>
</template>

<script>
import {bus} from '../main'
  export default {

    components:{

    },
    props:{
     title:{
       type:String
     }
    },
    data(){
      return{

      }
    },
    methods:{
      changeTitle:function () {
        //this.title="Vue wizard"
       // this.$emit('changeTitle','View Wizards');
        this.title='Vue Wizards';
        bus.$mit('titleChanged','Vue Wizards')
      }
    }
  }
</script>

<style scoped>
  header{
    background-color: lightgreen;
    text-align: center;
    padding: 10px;
  }
  h1{
    color:darkmagenta;
  }
</style>
