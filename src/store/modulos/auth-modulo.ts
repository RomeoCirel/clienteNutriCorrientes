import { EstadoActualDatos } from 'src/types/utilidades-tipos'
import { ModeloUsuario } from 'src/types/usuarios-tipos'
import { Module } from 'vuex'
import {
  CredencialesUsuario,
  RespuestaApiLogout,
  RespuestaLogin,
  RespuestaUsuarioAuth
} from 'src/types/auth-tipos'
import { login, logout, usuario } from 'src/services/auth-api'
import { LocalStorage } from 'quasar'
import { EstadoBase } from 'src/store/index'

import {
  AUTENTICAR_USUARIO,
  OBTENER_USUARIO_AUTH,
  LOGOUT
} from 'src/store/constantes/actions'
import {
  ESTA_LOGUEADO,
  USUARIO_AUTH,
  CAMBIAR_CLAVE,
  NOMBRE_USUARIO_AUTH,
  INICIALES_USUARIO_AUTH
} from 'src/store/constantes/guetters'

type Usuario = ModeloUsuario
export type UsuarioAuth = Usuario | null
export interface StateAuth {
  auth: boolean
  usuario: Usuario | null
  estado: EstadoActualDatos
}

const AuthModule: Module<StateAuth, EstadoBase> = {
  namespaced: true,
  state: {
    auth: false,
    usuario: null,
    estado: 'inicial'
  },
  mutations: {
    setUsuario(state, usuario: Usuario) {
      state.usuario = usuario
    },

    setEstadoCargando(state): void {
      state.estado = 'cargando'
    },
    setEstadoDatos(state): void {
      state.estado = 'datos'
    },
    setEstadoVacio(state): void {
      state.estado = 'vacio'
    },
    setEstadoError(state): void {
      state.estado = 'error'
    },
    setEstadoInicial(state): void {
      state.estado = 'inicial'
    },
    setAuth(state, estado: boolean): void {
      state.auth = estado
    }
  },
  actions: {
    setLogueado({ commit }): void {
      commit('setAuth', true)
    },
    async [AUTENTICAR_USUARIO](
      { commit },
      credenciales: CredencialesUsuario
    ): Promise<RespuestaLogin> {
      commit('setEstadoCargando')
      const respuesta = await login(credenciales)
      if (respuesta.ok) {
        if (respuesta.estado === 200) {
          const usuario = respuesta.datos.autenticacion.usuario
          commit('setUsuario', usuario)
          commit('setAuth', true)
          commit('setEstadoDatos')
        }
      }
      if (!respuesta.ok) {
        commit('setEstadoError')
      }
      return respuesta
    },

    async [OBTENER_USUARIO_AUTH]({ commit }): Promise<RespuestaUsuarioAuth> {
      commit('setEstadoCargando')
      const res = await usuario()
      if (res.ok) {
        const usuario = res.datos.usuario
        LocalStorage.set('usuario', usuario)
        commit('setUsuario', usuario)
        commit('setEstadoDatos')
      }
      if (!res.ok) {
        commit('setUsuario', null)
        commit('setEstadoError')
      }
      return res
    },

    async [LOGOUT]({ commit }): Promise<RespuestaApiLogout> {
      commit('setEstadoCargando')
      const res = await logout()
      if (res.ok) {
        if (res.estado === 200) {
          commit('setUsuario', null)
          commit('setAuth', false)
          commit('setEstadoInicial')
        }
      }
      if (!res.ok) {
        if (res.estado === 500) {
          commit('setEstadoError')
        }
      }
      return res
    }
  },
  getters: {
    [ESTA_LOGUEADO](state): boolean {
      return state.auth
    },

    [USUARIO_AUTH](state): Usuario | null {
      return state.usuario
    },

    [CAMBIAR_CLAVE](state): boolean {
      const usuario = state.usuario
      return usuario !== null ? usuario.cambiar_clave : false
    },

    [NOMBRE_USUARIO_AUTH](state): string {
      const usuario = state.usuario
      if (usuario !== null) {
        return `${usuario.nombre}`
      }
      return ''
    },

    [INICIALES_USUARIO_AUTH](state): string {
      const usuario = state.usuario
      if (usuario !== null) {
        const PrimerLetra = usuario.nombre.substring(0, 1)
        const SegundaLetra = usuario.apellido.substring(0, 1)
        const letras = `${PrimerLetra}${SegundaLetra}`
        return letras.toUpperCase()
      }
      return ''
    }
  }
}

export default AuthModule
