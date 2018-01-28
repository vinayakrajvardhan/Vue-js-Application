<template>
  <div>
    <h1> {{title}}</h1>
    <ninja></ninja>
    <app-practise v-bind:name="name"></app-practise>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
    <!-- <form-helper>
       <h1 slot="titlenew">I am the slot title{{title}}</h1>
       <p slot="textnew">I am the slot paragraph</p>
       //form starts
       <div slot="form-header">
         <h3>This is the title of a form</h3>
         <p>This is some info about the form</p>
       </div>
       <div slot="form-fields">
         <input type="text" placeholder="name" required />
         <input type="password" placeholder="password" required />
       </div>
       <div slot="form-controls">
         <button v-on:click="handleSubmit">Submit</button>
       </div>
     </form-helper>-->
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>

    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>
    <br>

    <!--//Add a Blog
     <app-blog></app-blog>-->

   <!-- <show-blog></show-blog>

    <list-blog></list-blog>-->

    <!--Router Link--->
    <header-again></header-again>
    <!--Router used -->
    <router-view></router-view>
  </div>
</template>

<script>
  import Ninja from './Ninja'
  import Practise from './components/practise'
  import Header from './components/header'
  import Footer from './components/footer'
  import Ninjas from './components/Ninjas'
  import FormHelper from './components/formhelper'
  import formOne from './components/formone.vue';
  import formTwo from './components/formtwo.vue';
  import Addblog from './components/AddBlog'
  import Showblog from './components/ShowBlog'
  import Listblog from './components/ListBlog'
  import Headeragain from './components/headerAgain'

  export default {
    components: {
      'ninja': Ninja,
      'app-practise': Practise,
      'app-header': Header,
      'app-footer': Footer,
      'app-ninjas': Ninjas,
      'form-helper': FormHelper,
      'form-one': formOne,
      'form-two': formTwo,
      'app-blog': Addblog,
      'show-blog': Showblog,
      'list-blog': Listblog,
      'header-again':Headeragain

    },

    data() {
      return {
        name: "practise",
        ninjas: [
          {namenew: 'rue', speacialitynew: 'vue-component', show: false},
          {namenew: 'brucelle', speacialitynew: 'vue-component', show: false},
          {namenew: 'jackiechan', speacialitynew: 'vue-component', show: false},
          {namenew: 'ninja ', speacialitynew: 'vue-component', show: false},
          {namenew: 'rolly', speacialitynew: 'vue-component', show: false}
        ],
        title: "Vue Ninjas",
        methods: {
          updateTitle: function (updatedtitle) {
            this.title = updatedtitle;
          }
        },
        component: 'form-two'

      }
    }

  }
</script>

<style>

</style>
