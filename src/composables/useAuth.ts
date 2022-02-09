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
import { rutaHome, rutalogin } from 'src/router/rutasNombres'
import { UsuarioAuth } from 'src/store/modulos/auth-modulo'
import {
  ClavesPermisos,
  Permisos,
  RespuestaObtenerPermisos
} from 'src/types/Permisos/permisos-type'
import {
  NAMED_AUTH_OBTENER_USUARIO,
  NAMED_AUTH_AUTENTICAR_USUARIO,
  NAMED_AUTH_LOGOUT,
  NAMED_AUTH_OBTENER_PERMISOS
} from 'src/store/constantes/actions'
const useAuth = () => {
  const store = useStore()
  const router = useRouter()
  const credenciales = reactive<CredencialesUsuario>(CREDENCIALES_DEFAULT)
  credenciales.device_name = dispositivo()

  const estaLogueado = computed<boolean>(
    () => store.getters['authModule/estaLogueado'] as boolean
  )

  const permisos = computed<Permisos>(
    () => store.getters['authModule/permisosUsuarioAuth'] as Permisos
  )

  const loguear = async (
    credenciales: CredencialesUsuario
  ): Promise<RespuestaLogin> => {
    console.log(credenciales)
    const res = (await store.dispatch(
      NAMED_AUTH_AUTENTICAR_USUARIO,
      credenciales
    )) as RespuestaLogin
    return res
  }

  const obtenerPermisos = async () => {
    const res = (await store.dispatch(
      NAMED_AUTH_OBTENER_PERMISOS
    )) as RespuestaObtenerPermisos
    if (!res.ok) {
      if (res.estado === 500) {
        // emitir notificaciones
      }
    }
  }

  const recuperarSession = async () => {
    const res = (await store.dispatch(
      NAMED_AUTH_OBTENER_USUARIO
    )) as RespuestaUsuarioAuth
    if (res.ok) {
      if (res.estado === 200) {
        void store.dispatch('authModule/setLogueado')
        void router.push({ name: rutaHome })
        await obtenerPermisos()
      }
    }
    if (!res.ok) {
      void router.push({ name: rutalogin })
    }
    return res
  }

  const tienePermiso = (permisonNecesario: ClavesPermisos): boolean => {
    return permisos.value[permisonNecesario]
  }

  return {
    permisos,
    tienePermiso,
    loguear,
    credenciales,
    estaLogueado,
    usuario: computed<UsuarioAuth>(
      () => store.getters['authModule/usuarioAuth'] as UsuarioAuth
    ),

    cerrar: async () => {
      const res = (await store.dispatch(
        NAMED_AUTH_LOGOUT
      )) as RespuestaApiLogout
      if (res.ok) {
        if (res.estado === 200) {
          void router.push({ name: rutalogin })
        }
      }
    },

    traerUsuarioAuth: async () => {
      const res = (await store.dispatch(
        NAMED_AUTH_OBTENER_USUARIO
      )) as RespuestaUsuarioAuth
      return res
    },
    recuperarSession
  }
}

export default useAuth
