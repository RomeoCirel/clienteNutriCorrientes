<template>
  <div
    class="
      mt-10
      min-h-full
      w-full
      sm:w-8/12
      lg:w-5/12
      xl:w-4/12
      flex
      items-center
      justify-center
      py-12
      sm:py-4
      px-0
      sm:px-1
      lg:px-8
    "
  >
    <div
      class="
        max-w-md
        w-full
        space-y-8
        px-4
        py-5
        bg-white
        space-y-6
        sm:p-6
        rounded-lg
        shadow
        sm:rounded-lg sm:overflow-hidden
      "
    >
      <div>
        <div class="flex items-center justify-center">
          <IsoLogo fill="text-gray-500 h-12 w-auto" />
        </div>
        <h2 class="mt-6 text-center text-3xl font-bold">Inicia Sesión</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Si no tiene cuenta comunicate con RRHH
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="">
          <div>
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  rounded-t-md
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  rounded-b-md
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Password"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="
                h-4
                w-4
                text-indigo-600
                focus:ring-indigo-500
                border-gray-300
                rounded
              "
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Recuerdame
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
              >Olvidaste tu contraseña?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
// import { ref } from 'vue'
import { LockClosedIcon } from '@heroicons/vue/solid'
import IsoLogo from '../components/IsoLogo.vue'

export default {
  name: 'FormularioLogin',
  components: {
    LockClosedIcon,
    IsoLogo
  }
}
</script>
