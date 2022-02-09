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

export type ParametrosBusqueda = {
  buscado?: string | number | null
  eliminados?: boolean
  ordenadoPor?: string
  orden?: 'ASC' | 'DESC'
  pagina: number
}

export const PARAMETROS_BUSQUEDA_DEFAULT: ParametrosBusqueda = {
  buscado: null,
  pagina: 1,
  orden: 'ASC'
}
