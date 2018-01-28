import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './route'

//Resource
Vue.use(VueResource)
Vue.use(VueRouter);

//Router
const router=new VueRouter({
  routes:Routes,
  mode:'history'
});


//Custom named rainbow Directives
/*
Vue.directive('rainbow',{
  bind(el,binding,vnode){
  el.style.color='red';
  }
});
*/

// Custom named theme directive
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=="wide"){
      el.style.maxWidth='1000px';
    }
    else if(binding.value=="narrow"){
      el.style.maxWidth="360px";
    }
    if(binding.arg=='column'){
      el.style.background='#ddd';
      el.style.padding='20px';
    }
  }
})

//Filters
 /*
Vue.filter('to-uppercase',function (value) {
  return value.toUpperCase();
})
*/

Vue.filter('snippet',function (value) {
  return value.slice(0,100);
})

//Nesting component Globally
//import Ninja from './Ninja'

//Vue.component('ninja',Ninja)

//event Bus
export const bus=new Vue()


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
