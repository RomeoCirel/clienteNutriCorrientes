/* eslint-disable camelcase */
import { MensajeExito } from './../types/mensaje-tipos'
import { Respuesta } from 'src/services/peticionesApi/clienteHTTP'
import {
  RespuestasComunesApi,
  RespuestaValidacion,
  RespuestasComunesApiSinToken
} from 'src/types/respuestas-tipos'

import { RespuestaLogout, DniUsuario } from 'src/types/auth-tipos'

interface DatosResetPassword {
  mansaje: MensajeExito
}
type RespuestaResetPassword = Respuesta<true, 200, DatosResetPassword>

export type RespuestaResetClave =
  | RespuestaValidacion<DniUsuario>
  | RespuestasComunesApiSinToken
  | RespuestaResetPassword

export interface FormularioCambiarClave {
  claveActual: string
  password: string
  password_confirmation: string
}

export type RespuestaModificarClave =
  | RespuestaLogout
  | RespuestasComunesApi
  | RespuestaValidacion<FormularioCambiarClave>
