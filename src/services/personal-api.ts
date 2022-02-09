import { peticionApi } from 'src/services/peticionesApi/clienteHTTP'
import {
  Usuario,
  RespuestaDeleteUsuario,
  RespuestaGetListaUsuarios,
  RespuestaStoreUsuario,
  RespuestaUpdateUsuario,
  RespuestaRestoreUsuario,
  ModeloUsuario,
  RespuestaGetUsuario
} from 'src/types/usuarios-tipos'
import { ParametrosBusqueda } from 'src/types/utilidades-tipos'

export const storeUsuario = async (
  usuario: Usuario
): Promise<RespuestaStoreUsuario> => {
  return peticionApi<RespuestaStoreUsuario>({
    metodo: 'POST',
    url: 'usuarios',
    conToken: true,
    datos: { ...usuario }
  })
}

export const editUsuario = async (
  usuario: ModeloUsuario
): Promise<RespuestaUpdateUsuario> => {
  return peticionApi<RespuestaUpdateUsuario>({
    metodo: 'PUT',
    url: 'usuarios',
    conToken: true,
    datos: { ...usuario }
  })
}

export const getUsuario = async (id: number): Promise<RespuestaGetUsuario> => {
  return peticionApi<RespuestaGetUsuario>({
    metodo: 'GET',
    url: `usuarios/${id}`,
    conToken: true
  })
}

export const getUsuarios = async (
  parametros: ParametrosBusqueda
): Promise<RespuestaGetListaUsuarios> => {
  return peticionApi<RespuestaGetListaUsuarios>({
    metodo: 'GET',
    url: 'usuarios',
    conToken: true,
    datos: parametros
  })
}

export const deleteUsuario = async (
  id: number
): Promise<RespuestaDeleteUsuario> => {
  return peticionApi<RespuestaDeleteUsuario>({
    metodo: 'DELETE',
    url: `usuarios/${id}`,
    conToken: true
  })
}

export const restoreUsuario = async (
  id: number
): Promise<RespuestaRestoreUsuario> => {
  return peticionApi<RespuestaRestoreUsuario>({
    metodo: 'POST',
    url: `usuarios/${id}/restaurar`,
    conToken: true
  })
}

export default {
  storeUsuario,
  editUsuario,
  getUsuario,
  getUsuarios,
  deleteUsuario,
  restoreUsuario
}
