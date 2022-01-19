import { RouteRecordRaw } from 'vue-router'
import { rutalogin, rutaHome } from './rutasNombres'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/Index.vue'),
    name: rutalogin
  },
  {
    path: '/inicio',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/home.vue') }],
    name: rutaHome
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
