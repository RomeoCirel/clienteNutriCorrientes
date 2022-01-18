/* eslint-disable camelcase */
import {
  ErroresValidacion,
  ErroresValidacionInicial,
  RespuestaValidacion
} from './respuestas-tipos'
import { Respuesta } from '../services/peticionesApi/clienteHTTP'
import { RespuestasComunesApi } from 'src/types/respuestas-tipos'
import { MensajeExito } from 'src/types/mensaje-tipos'
import { ModeloUsuario, Usuario } from 'src/types/usuarios-tipos'

// LOGIN
export type DniUsuario = Pick<Usuario, 'dni'>

export interface CredencialesRenovarToken {
  device_name: string
}
export interface CredencialesUsuario extends CredencialesRenovarToken {
  dni: number | null
  password: string
}

export interface TokenDatos {
  autenticacion: {
    usuario: ModeloUsuario
    token: string
    sesionExpira: string
  }
}

export type RespuestaToken = Respuesta<true, 200, TokenDatos>

export type RespuestaLogin =
  | RespuestasComunesApi
  | RespuestaToken
  | RespuestaValidacion<CredencialesUsuario>

// USUARIO AUTH
interface DatosUsuario {
  usuario: ModeloUsuario
}
type RespuestaUsuario = Respuesta<true, 200, DatosUsuario>
export type RespuestaUsuarioAuth = RespuestaUsuario | RespuestasComunesApi

// LOGOUT
interface DatosLogout {
  sinDatos: null
  mensaje: MensajeExito
}

export type RespuestaLogout = Respuesta<true, 200, DatosLogout>

export type RespuestaApiLogout = RespuestaLogout | RespuestasComunesApi

export type VlidacionesCredenciales = ErroresValidacion<CredencialesUsuario>
export type ValidacionCredencialesInicial =
  ErroresValidacionInicial<CredencialesUsuario>

// CONSTANTES
export const CREDENCIALES_VALIDACION_DEFAULT: ValidacionCredencialesInicial = {
  dni: {
    esValido: null,
    error: null
  },
  password: {
    esValido: null,
    error: null
  },
  device_name: {
    esValido: null,
    error: null
  }
}

export const CREDENCIALES_DEFAULT: CredencialesUsuario = {
  dni: null,
  password: '',
  device_name: ''
}
