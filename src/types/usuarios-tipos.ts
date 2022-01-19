/* eslint-disable camelcase */
import { Modelo, ID } from './modelos-tipos'
import { ModeloGenero } from './generos-tipos'

export interface Usuario {
  nombre: string
  apellido: string
  dni: number
  email: string
  fechaNacimiento: string
  genero_id: ID
  cambiar_clave: boolean
}

export interface ModeloUsuario extends Usuario, Modelo {
  genero: ModeloGenero
}
