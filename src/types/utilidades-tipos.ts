export type EstadoActualDatos =
  | 'inicial'
  | 'cargando'
  | 'datos'
  | 'mensaje'
  | 'vacio'
  | 'error'
  | 'validacion'

export interface Diccionario<Tipo> {
  [clave: string]: Tipo
}
