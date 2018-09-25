import Vue from '../node_modules/vue/dist/vue'
import Router from '../node_modules/vue-router/dist/vue-router'

Vue.use(Router)
let routes=[{
  path:'/123',
  components: require('./App.vue'),
  children:[{
    path:'hahaha:id',
    name:'hahaha',
    components:require('./Hahaha.vue')
  },{
    path:'xixi',
    components:require('./Xixi.vue')
  }]
}]

let router=new Router({
  routes
})

router.beforeEach(function(to,from,next){
  console.log(to.path)
  next()
})

new Vue({
  el:'#app',
  router,
  methods:{
    toRouterIndex(){
      this.$router.push({path:'/123'})
    }
  }
})
