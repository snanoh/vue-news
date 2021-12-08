import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';
import createListView from '../views/CreateListView.js'



Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('askView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('jobsView'),
    },
    {
      path: '/item',
      component: ItemView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    }
  ]
})