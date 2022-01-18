/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { date, useQuasar } from 'quasar'
import { renovar } from '../auth-api'

export interface Diccionario<Tipo> {
  [clave: string]: Tipo
}

export type TiposContenido =
  | 'application/json'
  | 'file'
  | 'application/x-www-form-urlencoded'
  | 'text/plain'
  | 'multipart/form-data'

export type Metodo = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type Cabeceras = Diccionario<string>

export interface Configuracion {
  url: string
  conToken?: boolean
  acepta?: TiposContenido
  contenido?: TiposContenido
  metodo: Metodo
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  datos?: any
}

export type Opciones = {
  metodo: Metodo
  url: string
  conToken?: boolean
  acepta?: TiposContenido
  contenido?: TiposContenido
  datos?: unknown
  params?: unknown
}

export interface OpcionesRuta {
  metodo: Metodo
  url: string
  datos?: unknown
}

export interface Respuesta<
  Ok extends boolean = boolean,
  Estado extends number = number,
  Datos extends unknown = unknown
> {
  ok: Ok
  estado: Estado
  textoEstado: string
  datos: Datos
}
export type EstadoToken = 'SIN_TOKEN' | 'VALIDO' | 'RENOVAR' | 'EXPIRO'

export function dispositivo() {
  const $q = useQuasar()
  const platform = $q.platform.is
  const nombre = platform.name as string
  const plataforma = platform.platform as string
  return `${nombre} - ${plataforma}`
}
// estado token
function estadoToken(): EstadoToken {
  const fechaStorage =
    localStorage.getItem('sesionExpira') !== null
      ? localStorage.getItem('sesionExpira')
      : null
  const fecha = fechaStorage?.slice(9) ?? null
  if (fecha === null) return 'SIN_TOKEN'

  const fechaActual = Date.now()
  const fechaExpiracion = date.formatDate(fecha, 'YYYY-MM-DDTHH:mm:ss.SSSZ')

  const diferencia = date.getDateDiff(fechaExpiracion, fechaActual, 'minutes')

  if (diferencia >= 15) {
    return 'VALIDO'
  }

  if (diferencia < 15 && diferencia > 0) {
    return 'RENOVAR'
  }

  return 'EXPIRO'
}

// CONSTRUCCION DE PETICION
const cabecerasPorDefecto: Cabeceras = {
  accept: 'application/json',
  'content-type': 'application/json'
}

function setRuta(urlInterna: string): URL {
  const endPoint = 'http://servernutricorrientes.io:8080/api/'
  const url = new URL(urlInterna, endPoint)
  return url
}

function rutaParams(opciones: OpcionesRuta) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { datos, metodo } = opciones
  const urlCompleta = setRuta(opciones.url)

  if (metodo === 'GET' && datos) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const parametros = new URLSearchParams(opciones.datos as any)
    urlCompleta.search = parametros.toString()
    return urlCompleta.toString()
  }

  return urlCompleta.toString()
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCuerpo(cabeceras: Headers, datos: any): any {
  if (cabeceras.has('content-type')) {
    const tipoContenido = cabeceras.get('content-type')

    if (tipoContenido) {
      if (tipoContenido.includes('application/json')) {
        return JSON.stringify(datos)
      }
    }
  }

  return datos
}

function configCabecera(opciones: Opciones): Headers {
  const cabeceras = new Headers(cabecerasPorDefecto)
  opciones.contenido = opciones.contenido ?? 'application/json'
  opciones.acepta = opciones.acepta ?? 'application/json'

  if (opciones.conToken) {
    const token = localStorage.getItem('id_token') || 'null'

    cabeceras.append(
      'Authorization',
      `Bearer ${token !== null ? token.slice(9) : ''}`
    )
  }
  if (
    cabeceras.has('accept') &&
    cabeceras.get('accept') !== null &&
    cabeceras.get('accept') !== opciones.acepta
  ) {
    cabeceras.set('accept', opciones.acepta)
  }

  return cabeceras
}

function getOpciones(url: string, opciones: Opciones): Request {
  const cabeceras = configCabecera(opciones)

  // eslint-disable-next-line no-undef
  const requestInit: RequestInit = {
    method: opciones.metodo,
    headers: cabeceras,
    mode: 'cors'
  }

  if (
    (opciones.metodo === 'POST' || opciones.metodo === 'PUT') &&
    opciones.datos
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    requestInit.body = getCuerpo(cabeceras, opciones.datos)
  }

  return new Request(url, requestInit)
}

function construirRequest(config: Configuracion): Request {
  const metodo: Metodo = config.metodo || 'GET'
  const opcionesRuta: OpcionesRuta = {
    url: config.url,
    datos: config.datos,
    metodo: config.metodo
  }
  const url = rutaParams(opcionesRuta)

  return getOpciones(url, { ...config, metodo })
}

// eslint-disable-next-line class-methods-use-this
async function getRespuesta(respuesta: Response): Promise<Respuesta> {
  let datos = null

  if (respuesta.headers.has('content-type')) {
    const tipoContenido = respuesta.headers.get('content-type')

    if (tipoContenido) {
      if (tipoContenido.includes('application/json')) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        datos = await respuesta.json()
      }

      if (tipoContenido.includes('text/plain')) {
        datos = await respuesta.text()
      }
    }
  }

  return {
    ok: respuesta.ok,
    estado: respuesta.status,
    textoEstado: respuesta.statusText,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    datos
  }
}

export async function peticionApi<RespuestaApi extends Respuesta>(
  config: Configuracion
) {
  config.conToken = config.conToken ?? true
  if (config.conToken) {
    const validezToken = estadoToken()
    if (validezToken === 'EXPIRO' || validezToken === 'SIN_TOKEN') {
      localStorage.clear()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const router = window.enrutador

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      router.push('/')
    }

    if (validezToken === 'RENOVAR') {
      await renovar({
        device_name: dispositivo()
      })
    }
  }
  const request = construirRequest(config)
  return fetch(request)
    .then((respuesta: Response) => {
      if (respuesta.status === 401) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const router = window.enrutador

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        router.push('/')
      }
      return getRespuesta(respuesta) as unknown as RespuestaApi
    })
    .catch((error) => {
      throw error
    })
}
