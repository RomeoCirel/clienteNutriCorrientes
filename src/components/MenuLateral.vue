<template>
  <div>
    <div class="rounded-lg shadow-lg h-screen bg-white py-6">
      <div class="px-4 pb-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Administración de Personal
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">Acciones disponibles</p>
      </div>
      <div class="grid gap-6 pl-2">
        <template v-for="item in menu" :key="item.name">
          <a
            v-if="tienePermiso(item.permiso)"
            @click="irARutaPorNombre(item.nombreRuta)"
            class="-m-3 p-3 flex items-start rounded-lg"
            :class="
              activa === item.nombreRuta
                ? 'bg-indigo-700  text-gray-100 hover:bg-indigo-400 text-gray-900'
                : 'hover:bg-indigo-100 text-indigo-600'
            "
          >
            <component
              :is="item.icon"
              class="flex-shrink-0 h-6 w-6"
              aria-hidden="true"
              :class="
                activa === item.nombreRuta
                  ? 'text-gray-100 hover:text-gray-900'
                  : 'text-indigo-600'
              "
            />
            <div class="ml-4" v-show="!miniState">
              <p
                class="text-base font-medium"
                :class="
                  activa === item.nombreRuta
                    ? 'text-gray-100 hover:text-gray-900'
                    : 'text-gray-900'
                "
              >
                {{ item.name }}
              </p>
              <p class="mt-1 text-sm text-gray-500">
                {{ item.description }}
              </p>
            </div>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, PropType, watch } from 'vue'
import { ListaItemsMenu } from 'src/types/NavMenu-tipos'
import useMenuRoutes from 'src/composables/useMenuRutes'
import useAuth from 'src/composables/useAuth'
import { ArchiveIcon } from '@heroicons/vue/outline'
interface Props {
  lista: ListaItemsMenu
  rutaActiva: string
}

const menuDefault: ListaItemsMenu = [
  {
    name: 'Item Default',
    icon: ArchiveIcon,
    nombreRuta: '#',
    permiso: 'personal.crear'
  }
]

export default defineComponent({
  name: 'MenuLateral',
  props: {
    lista: {
      type: Array as PropType<ListaItemsMenu>,
      default: () => menuDefault
    },
    rutaActiva: {
      type: String,
      default: ''
    }
  },
  setup(props: Props) {
    const menu: Ref<Props['lista']> = ref(props.lista)
    const activa: Ref<Props['rutaActiva']> = ref('')
    const { irARutaPorNombre } = useMenuRoutes()
    const { tienePermiso } = useAuth()
    watch(
      () => props.rutaActiva,
      (nueva, anterio) => {
        console.log(
          'cambio de ruta:',
          anterio,

          nueva
        )
        activa.value = nueva
      }
    )
    return {
      drawer: ref(false),
      miniState: ref(false),
      tienePermiso,
      activa,
      menu,
      irARutaPorNombre
    }
  }
})
</script>
