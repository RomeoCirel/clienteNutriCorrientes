import { RespuestasComunesApi } from '../respuestas-tipos'
import { Respuesta } from 'src/services/peticionesApi/clienteHTTP'

export interface Permiso {
  [key: string]: boolean
}

export type Permisos = {
  'acceso.gestion': boolean
  'acceso.adminsitracion.personal': boolean
  'personal.listado': boolean
  'personal.crear': boolean
  'personal.editar': boolean
  'personal.show': boolean
  'personal.eliminar': boolean
  'personal.restaurar': boolean
  'acceso.adminsitracion.marcas': boolean
  'marcas.listado': boolean
  'marcas.crear': boolean
  'marcas.editar': boolean
  'marcas.show': boolean
  'marcas.eliminar': boolean
  'marcas.restaurar': boolean
}

export type ClavesPermisos = keyof Permisos

export const PERMISOS_DEFAULT: Permisos = {
  'acceso.gestion': false,
  'acceso.adminsitracion.personal': false,
  'personal.listado': false,
  'personal.crear': false,
  'personal.editar': false,
  'personal.show': false,
  'personal.eliminar': false,
  'personal.restaurar': false,
  'acceso.adminsitracion.marcas': false,
  'marcas.listado': false,
  'marcas.crear': false,
  'marcas.editar': false,
  'marcas.show': false,
  'marcas.eliminar': false,
  'marcas.restaurar': false
}

export type ListaPermisos = Array<Permiso>

type DatosRespuestaPermisos = {
  permisos: Permisos
}

type RespuestaPermisos = Respuesta<true, 200, DatosRespuestaPermisos>

export type RespuestaObtenerPermisos = RespuestaPermisos | RespuestasComunesApi
