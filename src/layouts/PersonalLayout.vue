<template>
  <q-layout class="bg-white">
    <div class="flex">
      <div class="nav hidden lg:flex h-full">
        <MenuLateral :lista="menu" :rutaActiva="rutaActual" class="" />
      </div>
      <div class="flex-grow px-2 h-screen overflow-y-auto p-2">
        <q-page-container class="static">
          <router-view />
        </q-page-container>
      </div>
    </div>
    <div class="mb-0 lg:nav lg:hidden">
      <MenuInferior :lista="menu" :rutaActiva="rutaActual" />
    </div>
  </q-layout>
</template>
<script lang="ts">
import MenuInferior from 'src/components/MenuInferior.vue'
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { ListaItemsMenu } from 'src/types/NavMenu-tipos'
import MenuLateral from 'src/components/MenuLateral.vue'
import {
  CollectionIcon,
  UserAddIcon,
  UserRemoveIcon,
  HomeIcon
} from '@heroicons/vue/solid'
import { rutaPersaonalLista, rutaPersonalCrear } from 'src/router/rutasNombres'
import useMenuRoutes from 'src/composables/useMenuRutes'
import {
  PERMISO_PERSONAL_ADMIN,
  PERMISO_PERSONAL_CREAR,
  PERMISO_PERSONAL_LISTADO,
  PERMISO_PERSONAL_ELIMINAR
} from 'src/types/Permisos/constantes'
const menu: ListaItemsMenu = [
  {
    name: 'home',
    icon: HomeIcon,
    nombreRuta: 'personal',
    permiso: PERMISO_PERSONAL_ADMIN
  },
  {
    name: 'Nuevo Personal',
    icon: UserAddIcon,
    nombreRuta: rutaPersonalCrear,
    permiso: PERMISO_PERSONAL_CREAR
  },
  {
    name: 'Lista de Personal',
    icon: CollectionIcon,
    nombreRuta: rutaPersaonalLista,
    permiso: PERMISO_PERSONAL_LISTADO
  },
  {
    name: 'Lista de Deshabilitados',
    icon: UserRemoveIcon,
    nombreRuta: rutaPersaonalLista,
    permiso: PERMISO_PERSONAL_ELIMINAR
  }
]
export default defineComponent({
  name: 'PersonalLayout',
  components: {
    MenuLateral,
    MenuInferior
  },
  setup() {
    const { irARutaPorNombre } = useMenuRoutes()
    const route = useRoute()
    const rutaActual = computed<string>(() => route.name as string)
    return { menu, irARutaPorNombre, rutaActual }
  }
})
</script>
