import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
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
      //component: createListView('NewsView'),
      component : NewsView
    },
    {
      path: '/ask',
      name: 'ask',
      //component: createListView('askView'),
      component : AskView
    },
    {
      path: '/jobs',
      name: 'jobs',
      //component: createListView('jobsView'),
      component : JobsView
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