import {
  ListaUsuarios,
  ModeloUsuario,
  RespuestaStoreUsuario,
  Usuario,
  UsuarioNuevoFormulario,
  USUARIO_DEFAULT,
  RespuestaUpdateUsuario,
  RespuestaGetUsuario,
  RespuestaGetListaUsuarios,
  RespuestaDeleteUsuario,
  RespuestaRestoreUsuario
} from 'src/types/usuarios-tipos'

import {
  EstadoActualDatos,
  ParametrosBusqueda
} from 'src/types/utilidades-tipos'

import { Module } from 'vuex'
import { EstadoBase } from 'src/store/index'
import {
  deleteUsuario,
  editUsuario,
  getUsuario,
  getUsuarios,
  restoreUsuario,
  storeUsuario
} from 'src/services/personal-api'

type Modelo = UsuarioNuevoFormulario | ModeloUsuario
type Lista = ListaUsuarios | []

export interface StateUsuario {
  modelo: Modelo
  estado: EstadoActualDatos
  lista: Lista
}

const usuariosModulo: Module<StateUsuario, EstadoBase> = {
  namespaced: true,
  state: {
    modelo: { ...USUARIO_DEFAULT },
    lista: [],
    estado: 'inicial'
  },
  mutations: {
    setModelo(state, usuario: Modelo) {
      state.modelo = { ...usuario }
    },
    setLista(state, lista: Lista) {
      state.lista = lista
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
    }
  },
  actions: {
    async guardar({ commit }, modelo: Usuario): Promise<RespuestaStoreUsuario> {
      commit('setEstadoCargando')
      const res = await storeUsuario(modelo)
      if (res.ok) {
        if (res.estado === 201) {
          const modelo = res.datos.usuario
          commit('setModelo', modelo)
          commit('setEstadoDatos')
        }
      }
      if (!res.ok) {
        if (res.estado === 500) {
          commit('setModelo', USUARIO_DEFAULT)
          commit('setEstadoError')
        }
      }
      return res
    },

    async editar(
      { commit },
      modelo: ModeloUsuario
    ): Promise<RespuestaUpdateUsuario> {
      commit('setEstadoCargando')
      const res = await editUsuario(modelo)
      if (res.ok) {
        if (res.estado === 200) {
          const modelo = res.datos.usuario
          commit('setModelo', modelo)
          commit('setEstadoDatos')
        }
      }
      if (!res.ok) {
        if (res.estado === 500) {
          commit('setModelo', USUARIO_DEFAULT)
          commit('setEstadoError')
        }
      }
      return res
    },

    async obtener({ commit }, id: number): Promise<RespuestaGetUsuario> {
      commit('setEstadoCargando')
      const res = await getUsuario(id)
      if (res.ok) {
        if (res.estado === 200) {
          const modelo = res.datos.usuario
          commit('setModelo', modelo)
          commit('setEstadoDatos')
        }
      }
      if (!res.ok) {
        if (res.estado === 500) {
          commit('setModelo', USUARIO_DEFAULT)
          commit('setEstadoError')
        }
      }
      return res
    },

    async obtenerLista(
      { commit },
      parametros: ParametrosBusqueda
    ): Promise<RespuestaGetListaUsuarios> {
      commit('setEstadoCargando')
      const res = await getUsuarios(parametros)
      if (res.ok) {
        if (res.estado === 200) {
          const lista = res.datos.usuarios
          commit('setLista', lista)
          commit('setEstadoDatos')
        }
      }
      if (!res.ok) {
        if (res.estado === 500) {
          commit('setLista', [])
          commit('setEstadoError')
        }
      }
      return res
    },

    async eliminar({ commit }, id: number): Promise<RespuestaDeleteUsuario> {
      commit('setEstadoCargando')
      const res = await deleteUsuario(id)
      if (res.ok) {
        if (res.estado === 204) {
          commit('setModelo', USUARIO_DEFAULT)
          commit('setEstadoVacio')
        }
      }
      if (!res.ok) {
        if (res.estado === 500) {
          commit('setEstadoError')
        }
      }
      return res
    },

    async restaurar({ commit }, id: number): Promise<RespuestaRestoreUsuario> {
      commit('setEstadoCargando')
      const res = await restoreUsuario(id)
      if (res.ok) {
        if (res.estado === 200) {
          const modelo = res.datos.usuario
          commit('setModelo', modelo)
          commit('setEstadoDatos')
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
    modeloActual(state): Modelo {
      return state.modelo
    },
    listaActual(state): Lista {
      return state.lista
    },
    estadoActual(state): EstadoActualDatos {
      return state.estado
    }
  }
}

export default usuariosModulo
