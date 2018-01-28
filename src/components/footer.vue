<template>
  <div>

    <footer>
      <h2>{{copyright}}{{title}}</h2>
    </footer>
  </div>
</template>

<script>
  import {bus} from '../main'
  export default {
    props:{
      title:{
        type:String
      }
    },

    components:{

    },
    data(){
      return{
        copyright:"@Copyright vinayak raj vardhan "
      }
    },
    created(){
      bus.$on('titleChanged',(data)=>{
        this.title=data;
      })
    }
  }
</script>

<style scoped>
  footer{
    background-color: black;
    text-align: center;
    padding:6px;
  }
  h2{
    color:white;
  }

</style>
