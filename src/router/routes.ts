import { RouteRecordRaw } from 'vue-router'
import {
  rutalogin,
  rutaHome,
  rutaPersonal,
  rutaPersonalCrear
} from './rutasNombres'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/Index.vue'),
    name: rutalogin
  },
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'inicio',
        component: () => import('pages/home.vue'),
        name: rutaHome
      },
      {
        path: 'gestion/personal',
        component: () => import('layouts/PersonalLayout.vue'),
        children: [
          {
            path: 'administracion',
            component: () => import('pages/Personal.vue'),
            name: rutaPersonal
          },
          {
            path: 'crear',
            component: () => import('pages/NuevoPersonal.vue'),
            name: rutaPersonalCrear
          }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
