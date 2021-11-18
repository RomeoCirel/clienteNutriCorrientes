<template>
  <div class="h-full bg-gray-100 text-gray-600">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import 'tailwindcss/tailwind.css'
export default defineComponent({
  name: 'App'
})
</script>
