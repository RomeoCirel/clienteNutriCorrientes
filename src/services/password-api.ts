import { peticionApi } from 'src/services/peticionesApi/clienteHTTP'
import { DniUsuario } from 'src/types/auth-tipos'
import {
  FormularioCambiarClave,
  RespuestaModificarClave,
  RespuestaResetClave
} from 'src/types/password-tipos'

export async function resetPassword(
  dni: DniUsuario
): Promise<RespuestaResetClave> {
  const res = await peticionApi<RespuestaResetClave>({
    metodo: 'POST',
    url: 'password/recuperar',
    datos: { ...dni },
    conToken: false
  })
  return res
}

export async function modificarPassword(
  passwords: FormularioCambiarClave
): Promise<RespuestaModificarClave> {
  const res = await peticionApi<RespuestaModificarClave>({
    metodo: 'PUT',
    url: 'password',
    datos: { ...passwords },
    conToken: true
  })
  return res
}

export default { resetPassword, modificarPassword }
