import Vue from 'vue'
import Router from 'vue-router'
import EBook from './components/EBook.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: EBook
    },
  ]
})
