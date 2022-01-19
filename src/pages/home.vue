<template>
  <div
    class="relative bg-white md:h-screen md:flex justify-center sm:1/3 md:w-full"
  >
    <div class="lg:w-1/2 md:h-screen">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 md:h-screen"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-opacity-0 text-gray-500 invisible lg:text-opacity-100 lg:visible lg:text-white transform translate-x-1/2 z-1"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 50,100 100,0" />
        </svg>
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-60 text-opacity-0 text-gray-600 lg:invisible md:text-opacity-100 md:visible md:text-white transform translate-x-3/4 z-1"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="25,0 25,100 100,0 " />
        </svg>
        <main
          class="mt-0 max-w-7xl h-auto lg:96 px-4 sm:px-1 flex flex-wrap p-5 z-50 justify-center"
        >
          <div class="transform transition duration-500 hover:scale-110">
            <Logo
              fill="text-gray-600"
              :estilo="'w-full mb-1 mx-auto'"
              height="200"
              width="400"
            />
          </div>
          <div>
            <p class="z-50 w-full text-center p-8 text-base font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates saepe quisquam expedita dignissimos, sint sunt unde
              molestiae ratione excepturi placeat eaque provident quidem
              consectetur harum eligendi eius nam ut esse?
            </p>
          </div>
          <div class="flex flex-wrap justify-center">
            <div
              v-for="marca in marcas"
              :key="marca.marca"
              class="mb-0 transform transition duration-500 hover:scale-110"
            >
              <img :src="marca.imagen" />
              <h1
                class="mt-0 font-semibold italic tracking-wide text-center text-indigo-700"
              >
                {{ marca.marca }}
              </h1>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="sm:2/3 md:2/3 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover h-full md:w-full lg:w-full lg:h-full"
        :src="cereales"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from 'src/components/Logo.vue'
import cereales from 'src/assets/cereales.jpg'
import solFrut from 'src/assets/solFrut.png'
import puraVida from 'src/assets/puraVida.png'
import bbs from 'src/assets/bbs.png'
import abanderados from 'src/assets/abanderados.png'
interface LogoMarca {
  marca: string
  imagen: unknown
}
type ListaLogosMarcas = Array<LogoMarca>
const marcas: ListaLogosMarcas = [
  {
    marca: 'Sol Frut',
    imagen: solFrut
  },
  {
    marca: 'PuraVida',
    imagen: puraVida
  },
  {
    marca: "BB's",
    imagen: bbs
  },
  {
    marca: 'Abanderados',
    imagen: abanderados
  }
]
export default defineComponent({
  components: {
    Logo
  },
  setup() {
    return { cereales, marcas }
  }
})
</script>
