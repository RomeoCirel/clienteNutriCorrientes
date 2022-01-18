import { Respuesta } from 'src/services/peticionesApi/clienteHTTP'

import { MensajeError, MensajeExito } from 'src/types/mensaje-tipos'

export type RespuestaMensajeExito = Respuesta<
  true,
  200,
  { mensaje: MensajeExito }
>

export type RespuestaMensajeError = Respuesta<
  false,
  500,
  { mensaje: MensajeError }
>

type DatosError500 = { mensaje: MensajeError } | null
export type RespuestaSinConexion = Respuesta<false, 600>
export type RespuestaNoAutorizado = Respuesta<false, 401, null>
export type RespuestaSinPermisos = Respuesta<false, 403, null>
export type RespuestaNoEncontrado = Respuesta<false, 404, null>
export type RespuestaErrorInterno = Respuesta<false, 500, DatosError500>
export type RespuestaMultiplesPeticiones = Respuesta<
  false,
  429,
  { mensaje: MensajeError }
>

export type Buscar = string
export type Eliminados = boolean
export type Pagina = number
export type PorPagina = number
export type DireccionOrden = 'asc' | 'desc'

export interface ParametrosObtenerTodos<CamposOrden extends string = string> {
  buscar?: Buscar
  eliminados?: Eliminados
  pagina?: Pagina
  porPagina?: PorPagina
  ordenarPor?: CamposOrden
  orden?: DireccionOrden
}

// Paginación
export interface Paginacion {
  total: number
  porPagina: number
  paginaActual: number
  ultimaPagina: number
  desde: number | null
  hasta: number | null
  // TODO: commitear la eliminacion de este parametro
  // rutas: Rutas;
}

export const paginacionPorDefecto: Paginacion = {
  total: 0,
  porPagina: 10,
  paginaActual: 1,
  ultimaPagina: 1,
  desde: null,
  hasta: null
}

export type ErroresValidacionInicial<Modelo> = {
  // eslint-disable-next-line no-unused-vars
  [Clave in keyof Modelo]: { esValido: null; error: null }
}

export type ErroresValidacion<Modelo> = {
  // eslint-disable-next-line no-unused-vars
  [Clave in keyof Modelo]:
    | { esValido: true; error: null }
    | { esValido: false; error: string }
}
export type ValidacionObtenerTodos = ErroresValidacion<ParametrosObtenerTodos>

export type RespuestaValidacion<Modelo> = Respuesta<
  false,
  422,
  { errores: ErroresValidacion<Modelo> }
>
export type RespuestaErrorNoGrave = Respuesta<
  false,
  400,
  { mensaje: MensajeError }
>
export type RespuestasComunesApiSinToken =
  | RespuestaErrorInterno
  | RespuestaNoAutorizado

export type RespuestasComunesApi =
  | RespuestaErrorNoGrave
  | RespuestaNoAutorizado
  | RespuestaSinPermisos
  | RespuestaErrorInterno
  | RespuestaNoEncontrado
  | RespuestaMultiplesPeticiones
