<template>
  <div class="h-full h-screen bg-gray-100 text-gray-600">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useAuth from 'src/composables/useAuth'
import { useRouter } from 'vue-router'
import 'tailwindcss/tailwind.css'
export default defineComponent({
  name: 'App',
  setup() {
    const { estaLogueado, recuperarSession } = useAuth()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.enrutador = useRouter()
    void recuperarSession()
    return {
      estaLogueado
    }
  }
})
</script>
