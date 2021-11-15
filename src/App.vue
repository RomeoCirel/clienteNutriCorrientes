<template>
<div class="bg-yellow-500 font-bold">
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
