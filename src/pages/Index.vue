<template>
  <q-page class="row items-start justify-evenly">
    <FormularioLogin />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormularioLogin from '../components/FormularioLogin.vue'

export default defineComponent({
  components: { FormularioLogin }
})
</script>
