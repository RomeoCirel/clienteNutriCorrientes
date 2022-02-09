<template>
  <Popover class="relative bg-white z-45">
    <div class="mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-between w-full md:justify-start md:w-2">
          <div class="flex items-center w-10 sm:w-2 md:w-6 h-2 py-2">
            <a @click="irARutaPorNombre('login')">
              <IsoLogo class="w-2" fill="text-gray-500 h-8 w-auto " />
            </a>
          </div>
          <div class="flex-wrap -my-2 md:hidden">
            <PopoverButton
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Abrir menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
        <div class="nav hidden md:flex justify-between w-full">
          <PopoverGroup
            as="nav"
            class="nav hidden md:flex-nowrap md:flex space-x-10"
          >
            <Popover class="relative my-2 px-10 md:my-0 md:px-0">
              <PopoverButton
                as="button"
                @click="irARutaPorNombre(rutaHome)"
                class="flex text-gray-500 group bg-white rounded-md block md:inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>Inicio</span>
              </PopoverButton>
            </Popover>
            <Popover class="relative my-2 md:my-0" v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                ]"
              >
                <span>Producción</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                  ]"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <PopoverPanel
                  class="absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                >
                  <div
                    class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                  >
                    <div
                      class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                    >
                      <a
                        v-for="item in produccion"
                        :key="item.name"
                        @click="irARutaPorNombre(item.nombreRuta)"
                        class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <component
                          :is="item.icon"
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            {{ item.name }}
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            {{ item.description }}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <Popover class="relative my-2 md:my-0" v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                ]"
              >
                <span>Recursos</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                  ]"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <PopoverPanel
                  class="absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                >
                  <div
                    class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                  >
                    <div
                      class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                    >
                      <a
                        v-for="item in recursos"
                        :key="item.name"
                        @click="irARutaPorNombre(item.nombreRuta)"
                        class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <component
                          :is="item.icon"
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            {{ item.name }}
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            {{ item.description }}
                          </p>
                        </div>
                      </a>
                    </div>
                    <!-- <div
                    class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
                  >
                    <div
                      v-for="item in callsToAction"
                      :key="item.name"
                      class="flow-root"
                    >
                      <a
                        :href="item.href"
                        class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                      >
                        <component
                          :is="item.icon"
                          class="flex-shrink-0 h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="ml-3">{{ item.name }}</span>
                      </a>
                    </div>
                  </div> -->
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>

            <Popover class="relative my-2 md:my-0" v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                ]"
              >
                <span>Gestion</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                  ]"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <PopoverPanel
                  class="absolute z-50 left-1/2 transform -translate-x-1/4 md:-translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                >
                  <div
                    class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                  >
                    <div
                      class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                    >
                      <a
                        v-for="item in gestion"
                        :key="item.name"
                        @click="irARutaPorNombre(item.nombreRuta)"
                        class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <component
                          :is="item.icon"
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            {{ item.name }}
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            {{ item.description }}
                          </p>
                        </div>
                      </a>
                    </div>
                    <!-- <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <h3
                        class="text-sm tracking-wide font-medium text-gray-500 uppercase"
                      >
                        Recent Posts
                      </h3>
                      <ul role="list" class="mt-4 space-y-4">
                        <li
                          v-for="post in recentPosts"
                          :key="post.id"
                          class="text-base truncate"
                        >
                          <a
                            :href="post.href"
                            class="font-medium text-gray-900 hover:text-gray-700"
                          >
                            {{ post.name }}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-5 text-sm">
                      <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        View all posts <span aria-hidden="true">&rarr;</span></a
                      >
                    </div>
                  </div> -->
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
          <div>
            <Popover class="relative my-2 md:my-0 mr-10" v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                ]"
              >
                <template v-if="usuario !== null">
                  <span>{{ usuario.nombre }} </span>
                  <img
                    class="inline-block h-6 w-6 rounded-full ring-2 ring-white ml-2"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                </template>
                <template v-else>
                  <span span>Usuario</span>
                  <img
                    class="inline-block h-6 w-6 rounded-full ring-2 ring-white ml-2"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                </template>
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <PopoverPanel
                  class="absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 -translate-x-2/3 lg:ml-0 lg:left-1/2 lg:-translate-x-2/3"
                >
                  <div
                    class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                  >
                    <div
                      class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                    >
                      <template v-for="item in session" :key="item.name">
                        <a
                          v-if="item.accion && item.accion === 'cerrar'"
                          @click="cerrar"
                          class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <component
                            :is="item.icon"
                            class="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">
                              {{ item.name }}
                            </p>
                            <p
                              class="mt-1 text-sm text-gray-500"
                              v-if="item.description"
                            >
                              {{ item.description }}
                            </p>
                          </div>
                        </a>
                        <a
                          v-else
                          @click="irARutaPorNombre(item.nombreRuta)"
                          class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <component
                            :is="item.icon"
                            class="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">
                              {{ item.name }}
                            </p>
                            <p
                              class="mt-1 text-sm text-gray-500"
                              v-if="item.description"
                            >
                              {{ item.description }}
                            </p>
                          </div>
                        </a>
                      </template>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div
                class="flex justify-start items-center w-10 sm:w-2 md:w-6 h-2 py-2"
              >
                <a href="#">
                  <IsoLogo class="w-2" fill="text-gray-500 h-8 w-auto " />
                </a>
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <PopoverGroup
                as="nav"
                class="flex-wrap md:flex-nowrap md:flex space-x-10"
              >
                <Popover class="relative my-5 px-10 md:my-0 md:px-0">
                  <PopoverButton
                    as="button"
                    @click="irHome"
                    class="flex text-gray-500 group bg-white rounded-md block md:inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span>Inicio</span>
                  </PopoverButton>
                </Popover>
                <Popover class="relative my-5 md:my-0" v-slot="{ open }">
                  <PopoverButton
                    :class="[
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    ]"
                  >
                    <span>Producción</span>
                    <ChevronDownIcon
                      :class="[
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      ]"
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0 translate-y-1"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-1"
                  >
                    <PopoverPanel
                      class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md -translate-y-[30%] sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    >
                      <div
                        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                      >
                        <div
                          class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                        >
                          <a
                            v-for="item in produccion"
                            :key="item.name"
                            @click="irARutaPorNombre(item.nombreRuta)"
                            class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <component
                              :is="item.icon"
                              class="flex-shrink-0 h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                            <div class="ml-4">
                              <p class="text-base font-medium text-gray-900">
                                {{ item.name }}
                              </p>
                              <p class="mt-1 text-sm text-gray-500">
                                {{ item.description }}
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>
                <Popover class="relative my-5 md:my-0" v-slot="{ open }">
                  <PopoverButton
                    :class="[
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    ]"
                  >
                    <span>Recursos</span>
                    <ChevronDownIcon
                      :class="[
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      ]"
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0 translate-y-1"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-1"
                  >
                    <PopoverPanel
                      class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    >
                      <div
                        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                      >
                        <div
                          class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                        >
                          <a
                            v-for="item in recursos"
                            :key="item.name"
                            @click="irARutaPorNombre(item.nombreRuta)"
                            class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <component
                              :is="item.icon"
                              class="flex-shrink-0 h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                            <div class="ml-4">
                              <p class="text-base font-medium text-gray-900">
                                {{ item.name }}
                              </p>
                              <p class="mt-1 text-sm text-gray-500">
                                {{ item.description }}
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <Popover class="relative my-5 md:my-0" v-slot="{ open }">
                  <PopoverButton
                    :class="[
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    ]"
                  >
                    <span>Gestion</span>
                    <ChevronDownIcon
                      :class="[
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      ]"
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0 translate-y-1"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-1"
                  >
                    <PopoverPanel
                      class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                    >
                      <div
                        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                      >
                        <div
                          class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                        >
                          <a
                            v-for="item in gestion"
                            :key="item.name"
                            @click="irARutaPorNombre(item.nombreRuta)"
                            class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <component
                              :is="item.icon"
                              class="flex-shrink-0 h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                            <div class="ml-4">
                              <p class="text-base font-medium text-gray-900">
                                {{ item.name }}
                              </p>
                              <p class="mt-1 text-sm text-gray-500">
                                {{ item.description }}
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>
              </PopoverGroup>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script lang="ts">
import { PropType, Ref, ref, watch, defineComponent } from 'vue'

import useAuth from 'src/composables/useAuth'
import useMenuRoutes from 'src/composables/useMenuRutes'
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { rutaHome } from 'src/router/rutasNombres'
import IsoLogo from './IsoLogo.vue'
import Logo from './Logo.vue'

type PropEstaLogueado = boolean

interface Props {
  estaLogueado: PropEstaLogueado
}

export default defineComponent({
  name: 'NavBar',
  props: {
    estaLogueado: {
      type: Boolean as PropType<PropEstaLogueado>,
      default: false
    }
  },
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
    IsoLogo,
    Logo
  },

  setup(props: Props, { emit }) {
    const { cerrar, usuario } = useAuth()
    const { recursos, produccion, session, gestion, irARutaPorNombre } =
      useMenuRoutes()
    const logueado: Ref<Props['estaLogueado']> = ref(props.estaLogueado)

    watch(
      () => props.estaLogueado,
      (newEstaLogueado: Props['estaLogueado']) => {
        logueado.value = newEstaLogueado
      }
    )
    return {
      rutaHome,
      produccion,
      gestion,
      session,
      irARutaPorNombre,
      recursos,
      logueado,
      usuario,
      cerrar,
      irHome: () => void emit('irHome')
    }
  }
})
</script>
