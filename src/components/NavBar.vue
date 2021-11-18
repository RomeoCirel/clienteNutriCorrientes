<template>
  <div class="sticky top-0 min-h-full">
    <Disclosure as="nav" class="bg-gray-700" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-full">
                <IsoLogo fill="text-white h-12 w-auto" v-if="logueado" />
                <Logo v-else fill="text-white h-full w-auto -mt-3" />
              </div>
            </div>
            <div class="visible sm:invisible md:visible" v-if="logueado">
              <div class="ml-10 flex items-baseline space-x-4">
                <a
                  v-for="item in menu"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-100 hover:bg-gray-800 hover:text-white',
                    'px-3 py-2 rounded-md text-sm font-medium'
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
          <div class="lg:block" v-if="logueado">
            <div class="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                class="
                  bg-gray-800
                  p-1
                  rounded-full
                  text-gray-400
                  hover:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-800
                  focus:ring-white
                "
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="ml-3 relative">
                <div>
                  <MenuButton
                    class="
                      max-w-xs
                      bg-gray-800
                      rounded-full
                      flex
                      items-center
                      text-sm
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-offset-gray-800
                      focus:ring-white
                    "
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      :src="Usuario.imageUrl"
                      alt=""
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="
                      origin-top-right
                      absolute
                      right-0
                      mt-2
                      w-48
                      rounded-md
                      shadow-lg
                      py-1
                      bg-white
                      ring-1 ring-black ring-opacity-5
                    "
                  >
                    <MenuItem v-for="item in menuUsuario" :key="item.name">
                      <a
                        :href="item.href"
                        :class="'block px-4 py-2 text-sm text-gray-900'"
                        >{{ item.name }}</a
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:invisible" v-if="logueado">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="
                bg-gray-800
                inline-flex
                items-center
                justify-center
                p-2
                rounded-md
                text-gray-400
                hover:text-white hover:bg-gray-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-800
                focus:ring-white
              "
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="" v-if="logueado">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <DisclosureButton
            v-for="item in menu"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium'
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                :src="Usuario.imageUrl"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                {{ Usuario.name }}
              </div>
              <div class="text-sm font-medium leading-none text-gray-400">
                {{ Usuario.email }}
              </div>
            </div>
            <button
              type="button"
              class="
                ml-auto
                bg-gray-800
                flex-shrink-0
                p-1
                rounded-full
                text-gray-400
                hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-800
                focus:ring-white
              "
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <DisclosureButton
              v-for="item in menuUsuario"
              :key="item.name"
              as="a"
              :href="item.href"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-400
                hover:text-white hover:bg-gray-700
              "
              >{{ item.name }}</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <header class="bg-white shadow" v-if="logueado">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { PropType, Ref, ref, watch } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import IsoLogo from '../components/IsoLogo.vue'
import Logo from '../components/Logo.vue'

interface User {
  name: string
  email: string
  imageUrl: string
}
const user: User = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}

interface ItemMenu {
  name: string
  href: string
}
interface ItemMenuCurrent extends ItemMenu {
  current: boolean
}

type ListaMenu = Array<ItemMenu>
type ListaMenuCurrent = Array<ItemMenuCurrent>
const navigation: ListaMenuCurrent = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Planes', href: '#', current: false },
  { name: 'Productos', href: '#', current: false },
  { name: 'Ingredientes', href: '#', current: false },
  { name: 'Reportes', href: '#', current: false }
]
const userNavigation: ListaMenu = [
  { name: 'Tu Perfil', href: '#' },
  { name: 'Configuraciones', href: '#' },
  { name: 'Cerrar Sesion', href: '#' }
]
type PropEstaLogueado = boolean
interface Props {
  estaLogueado: PropEstaLogueado
}

export default {
  name: 'NavBar',
  props: {
    estaLogueado: {
      type: Boolean as PropType<PropEstaLogueado>,
      default: false
    }
  },
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
    IsoLogo,
    Logo
  },

  setup(props: Props) {
    const logueado: Ref<Props['estaLogueado']> = ref(props.estaLogueado)

    const Usuario: Ref<User> = ref(user)
    const menuUsuario: Ref<ListaMenu> = ref(userNavigation)
    const menu: Ref<ListaMenuCurrent> = ref(navigation)

    watch(
      () => props.estaLogueado,
      (newEstaLogueado: Props['estaLogueado']) => {
        logueado.value = newEstaLogueado
      }
    )
    return {
      logueado,
      Usuario,
      menu,
      menuUsuario
    }
  }
}
</script>
