<template xmlns:v-theme="http://www.w3.org/1999/xhtml">
  <div v-theme="'wide'" id="show-blogs">
    <h1>List Blogs Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">

    <!-- <div v-for="blog in blogs " class="single-blog">-->
    <div v-for="blog in   filteredBlogs " class="single-blog">
      <h2 v-rainbow> {{blog.title |to-uppercase}}</h2>


    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        blogs: [],
        search: ''
      }
    },
    methods: {},
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {
        this.blogs = data.body.slice(0, 10);

      })
    },
    computed: {
      filteredBlogs: function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        });
      }
    },
    //filters used locally
    filters:{
      'to-uppercase':function (value) {
        return value.toUpperCase();
      }
    },
//directive used locally
    directives:{
      'rainbow':{
        bind(el,binding,vnode){
          el.style.color='red';
        }
      }
    },


  }
</script>

<style scoped>
  #show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: burlywood;

  }
</style>
