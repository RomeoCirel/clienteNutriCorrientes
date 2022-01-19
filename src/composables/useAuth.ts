/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { RespuestaUsuarioAuth } from './../types/auth-tipos'
import { dispositivo } from 'src/services/peticionesApi/clienteHTTP'
import {
  CredencialesUsuario,
  CREDENCIALES_DEFAULT,
  RespuestaApiLogout,
  RespuestaLogin
} from 'src/types/auth-tipos'
import { useStore } from 'src/store'
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { rutalogin } from 'src/router/rutasNombres'
import { UsuarioAuth } from 'src/store/modulos/auth-modulo'
const useAuth = () => {
  const store = useStore()
  const router = useRouter()
  const credenciales = reactive<CredencialesUsuario>(CREDENCIALES_DEFAULT)
  credenciales.device_name = dispositivo()

  const loguear = async (
    credenciales: CredencialesUsuario
  ): Promise<RespuestaLogin> => {
    console.log(credenciales)
    const res = (await store.dispatch(
      'authModule/autenticar',
      credenciales
    )) as RespuestaLogin
    return res
  }

  const estaLogueado = computed<boolean>(
    () => store.getters['authModule/estaLogueado'] as boolean
  )

  const recuperarSession = async () => {
    const res = (await store.dispatch(
      'authModule/obtenerUsuarioAuth'
    )) as RespuestaUsuarioAuth
    if (res.ok) {
      if (res.estado === 200) {
        void store.dispatch('authModule/setLogueado')
      }
    }
    if (!res.ok) {
      void router.push({ name: rutalogin })
    }
    return res
  }

  return {
    loguear,
    credenciales,
    estaLogueado,
    usuario: computed<UsuarioAuth>(
      () => store.getters['authModule/usuarioAuth'] as UsuarioAuth
    ),

    cerrar: async () => {
      const res = (await store.dispatch(
        'authModule/salir'
      )) as RespuestaApiLogout
      if (res.ok) {
        if (res.estado === 200) {
          void router.push({ name: rutalogin })
        }
      }
    },

    traerUsuarioAuth: async () => {
      const res = (await store.dispatch(
        'authModule/obtenerUsuarioAuth'
      )) as RespuestaUsuarioAuth
      return res
    },
    recuperarSession
  }
}

export default useAuth
