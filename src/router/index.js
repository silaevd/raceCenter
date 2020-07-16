import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login';
import Dashboard from '@/components/dashboard';
import News from '@/components/news';
import Eventlist from '@/components/eventlist';
import Event from '@/components/event';
import Profile from '@/components/profile';
import Admin from '@/components/admin';
import newsList from '@/components/admin/newsList';
import newsEdit from '@/components/admin/newsEdit';
import eventsList from '@/components/admin/eventsList';
import { isEmpty } from 'lodash';
import { getToken } from '@/directive/auth';

Vue.use(Router);

export default (store) => {
  const token = getToken();
  if (store.state.auth.token !== token) {
    store.dispatch('auth/setToken', token);
  }

  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: News,
        name: 'News',
      },
      {
        path: '/eventlist',
        component: Eventlist,
        name: 'Eventlist',
      },
      {
        path: '/event',
        component: Event,
        name: 'Event',
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/profile',
        component: Profile,
        name: 'Profile',
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/admin',
        component: Admin,
        name: 'Admin',
        meta: {
          // requiresAuth: true,
        },
        children: [
          { path: 'newsList', component: newsList, name: 'newsList', props: true },
          { path: 'eventsList', component: eventsList, name: 'eventsList', props: true },
          { path: 'newsEdit/id:id', component: newsEdit, name: 'newsEdit', props: true },
        ]
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/dashboard',
        component: Dashboard,
        meta: {
          requiresAuth: true,
        },
      },
    ],
    scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
  });

  router.beforeEach(async (to, from, next) => {
    const { token, user } = store.state.auth;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    // TODO: use store dispatch to get user information
    if (token && isEmpty(user)) {
      await store.dispatch('auth/getAuthUser');
    }

    if (token && (to.path === '/login' || to.path === '/') && !isEmpty(user)) {
      next();
    } else if (!token && requiresAuth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  });
  return router;
};
