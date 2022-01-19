<template>
  <q-layout view="lHh Lpr lFf">
    <Menu :estaLogueado="true" />
    <q-page-container>
      <router-view @irHome="irHome" @irLogin="irLogin" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { rutalogin, rutaHome } from 'src/router/rutasNombres'

import Menu from 'src/components/Menu.vue'

export default {
  name: 'MainLayout',

  components: {
    Menu
  },

  setup() {
    const router = useRouter()

    return {
      // rutas
      irHome: () => void router.push({ name: rutaHome }),
      irLogin: () => void router.push({ name: rutalogin })
    }
  }
}
</script>
