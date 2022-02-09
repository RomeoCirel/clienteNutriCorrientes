<template>
  <div class="bg-white shadow-t-md fixed bottom-0 h-16 w-screen mb-0">
    <Propover>
      <PopoverGroup
        as="nav"
        class="flex-nowrap flex items-center space-x-20 justify-center shadow-t-md h-full"
      >
        <Popover class="relative my-2 md:my-0 space-x-12 rounded-md p-1 px-2">
          <template v-for="item in lista" :key="item.name">
            <PopoverButton
              as="button"
              v-if="tienePermiso(item.permiso)"
              @click="irARutaPorNombre(item.nombreRuta)"
              class="flex p-1 px-2 group rounded-md inline-flex items-center font-medium outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-indigo-400"
              :class="
                activa === item.nombreRuta
                  ? 'text-gray-100  bg-indigo-600 '
                  : 'text-indigo-600  '
              "
            >
              <component
                :is="item.icon"
                class="h-10 w-10 hover:text-gray-100"
                :class="
                  activa === item.nombreRuta
                    ? 'text-gray-100'
                    : 'text-indigo-600'
                "
                aria-hidden="true"
              />
            </PopoverButton>
          </template>
        </Popover>
      </PopoverGroup>
    </Propover>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, PropType, watch } from 'vue'
import { Popover, PopoverButton, PopoverGroup } from '@headlessui/vue'
import { ListaItemsMenu } from 'src/types/NavMenu-tipos'

import useAuth from 'src/composables/useAuth'
import useMenuRoutes from 'src/composables/useMenuRutes'
import { ArchiveIcon } from '@heroicons/vue/solid'
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
  name: 'MenuInferior',
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
  components: {
    Popover,
    PopoverButton,
    PopoverGroup
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
      activa,
      menu,
      irARutaPorNombre,
      tienePermiso
    }
  }
})
</script>
<style lang="css">
.shadow-t-md {
  box-shadow: 0rem 1rem 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
</style>
