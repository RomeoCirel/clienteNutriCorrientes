import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import { createStore, Store as VuexStore, useStore as vuexUseStore } from 'vuex'

import { AUTH_MODULO, USUARIOS_MODULO } from 'src/store/constantes/modulos'

import AuthModule, { StateAuth } from 'src/store/modulos/auth-modulo'
import usuariosModulo, { StateUsuario } from 'src/store/modulos/usuarios-modulo'
export interface EstadoBase {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  authModule: StateAuth
  usuariosModulo: StateUsuario
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<EstadoBase>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<EstadoBase>> = Symbol('vuex-key')

export default store(function (/* { ssrContext } */) {
  const Store = createStore<EstadoBase>({
    modules: {
      [AUTH_MODULO]: AuthModule,
      [USUARIOS_MODULO]: usuariosModulo
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  })

  return Store
})

export function useStore() {
  return vuexUseStore(storeKey)
}
