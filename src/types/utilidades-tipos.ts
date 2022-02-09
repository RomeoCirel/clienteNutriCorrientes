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

export type ModeloParaFormulario<Modelo> = {
  [Clave in keyof Modelo]: Modelo[Clave] | null
}