<template>
  <div class="row items-start justify-evenly h-full">
    <FormularioLogin @irHome="irHome" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormularioLogin from 'src/components/FormularioLogin.vue'
import { useRouter } from 'vue-router'
import { rutaHome } from 'src/router/rutasNombres'

export default defineComponent({
  name: 'login',
  components: { FormularioLogin },
  setup() {
    const router = useRouter()
    return {
      irHome: () => void router.push({ name: rutaHome })
    }
  }
})
</script>
