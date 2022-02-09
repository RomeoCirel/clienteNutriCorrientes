export type PropTipo =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'date'
  | 'select'
export type PropLabel = string
export type PropNombre = string
export type PropEsValido = boolean
export type PropMensajeError = string
export type PropPlaceholder = string
export type PropValor = string | number | null
export type PropDescripcion = string
export type PropOptions = Array<{
  value: number | string
  label: string
}>
export type PropRequerido = boolean

export type PropsInput = {
  tipo: PropTipo
  nombre: PropNombre
  label: PropLabel
  esValido: PropEsValido
  error: PropMensajeError
  placeHolder: PropPlaceholder
  valor: PropValor
  descripcion: PropDescripcion
  options?: PropOptions
  requerido?: PropRequerido
}

export type ListaInputsForm = Array<PropsInput>
