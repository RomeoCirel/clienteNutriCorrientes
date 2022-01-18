import {
  CredencialesUsuario,
  RespuestaLogin,
  RespuestaApiLogout,
  RespuestaUsuarioAuth,
  CredencialesRenovarToken
} from 'src/types/auth-tipos'
import { peticionApi } from 'src/services/peticionesApi/clienteHTTP'
import { LocalStorage } from 'quasar'

export async function login(
  credenciales: CredencialesUsuario
): Promise<RespuestaLogin> {
  const res = await peticionApi<RespuestaLogin>({
    metodo: 'POST',
    url: 'auth/login',
    datos: { ...credenciales },
    conToken: false
  })
  if (res.ok) {
    if (res.estado === 200) {
      const usuario = res.datos.autenticacion.usuario
      const token = res.datos.autenticacion.token
      const sesion = res.datos.autenticacion.sesionExpira
      LocalStorage.set('usuario', usuario)
      LocalStorage.set('id_token', token)
      LocalStorage.set('sesionExpira', sesion)
    }
  }
  console.log(res)
  return res
}

export async function usuario(): Promise<RespuestaUsuarioAuth> {
  const res = await peticionApi<RespuestaUsuarioAuth>({
    metodo: 'POST',
    url: 'auth/usuario',
    conToken: true
  })
  return res
}

export async function logout(): Promise<RespuestaApiLogout> {
  const res = await peticionApi<RespuestaApiLogout>({
    metodo: 'POST',
    url: 'auth/logout',
    conToken: true
  })
  if (res.ok) {
    if (res.estado === 200) {
      LocalStorage.remove('usuario')
      LocalStorage.remove('id_token')
      LocalStorage.remove('sesionExpira')
    }
  }
  return res
}

export async function logoutAll(): Promise<RespuestaApiLogout> {
  const res = await peticionApi<RespuestaApiLogout>({
    metodo: 'POST',
    url: 'auth/logoutgeneral',
    conToken: true
  })
  return res
}

export async function renovar(
  dispositivo: CredencialesRenovarToken
): Promise<RespuestaLogin> {
  const res = await peticionApi<RespuestaLogin>({
    metodo: 'POST',
    url: 'auth/renovar',
    conToken: true,
    datos: dispositivo
  })
  if (res.ok) {
    if (res.estado === 200) {
      const usuario = res.datos.autenticacion.usuario
      const token = res.datos.autenticacion.token
      const sesion = res.datos.autenticacion.sesionExpira
      LocalStorage.set('usuario', usuario)
      LocalStorage.set('id_token', token)
      LocalStorage.set('sesionExpira', sesion)
    }
  }
  console.log(res)
  return res
}
export default { login, usuario, logout, logoutAll, renovar }
