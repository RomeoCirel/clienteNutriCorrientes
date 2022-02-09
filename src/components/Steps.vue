<template>
  <h1>Pasos</h1>
  <div
    class="grid gap-5 grid-cols-1 w-full place-content-start content-start"
    :class="`md:grid-cols-${pasos.length}`"
  >
    <template v-for="paso in pasos" :key="paso.numero">
      <button
        class="mt-0 pt-0 flex flex-col flex-1 h-25 items-center justify-center"
        :class="
          paso.numero === pasoActual
            ? 'activo'
            : paso.estado === 'completado'
            ? 'completo cursor-default'
            : 'color cursor-pointer'
        "
      >
        <div
          class="w-10 h-10 rounded-full border-double border-4 text-center font-semibold p-2 flex items-center justify-center"
        >
          <p class="">{{ paso.numero }}</p>
        </div>
        <div class="font-semibold descripcion">
          {{ paso.titulo }}
        </div>
      </button>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
type Paso = {
  titulo: string
  numero: number
  estado: 'pendiente' | 'omitido' | 'completado'
}

export type PropPasos = Array<Paso>

export type PropPasoActual = number

const PASOS_DEFAULT: PropPasos = [
  { titulo: 'Primer Paso', numero: 1, estado: 'pendiente' },
  { titulo: 'Segundo Paso', numero: 2, estado: 'completado' },
  { titulo: 'Tercer Paso', numero: 3, estado: 'pendiente' },
  { titulo: 'Cuarto Paso', numero: 4, estado: 'pendiente' }
]
export default defineComponent({
  name: 'steps',
  props: {
    pasos: {
      type: Array as PropType<PropPasos>,
      default: () => PASOS_DEFAULT
    },
    pasoActual: {
      type: Number as PropType<PropPasoActual>,
      default: 1
    }
  }
})
</script>
<style lang="scss">
.completo div.rounded-full {
  background: rgb(15, 137, 108);
  color: white;
}
.completo div.descripcion {
  color: rgb(15, 137, 108);
}
.activo div.rounded-full {
  background: rgba(29, 78, 216, 1);
  color: white;
}
.activo div.descripcion {
  color: rgba(29, 78, 216, 1);
}

.color div.descripcion {
  color: rgb(141, 143, 145);
}
.color div.rounded-full {
  background: rgb(141, 143, 145);
  color: white;
}
.color:hover div.rounded-full {
  background: rgba(29, 78, 216, 1);
  color: white;
}
.color:hover div.descripcion {
  color: rgba(29, 78, 216, 1);
}
</style>
