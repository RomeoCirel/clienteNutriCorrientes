import {
  nameSpacedString,
  AUTH_MODULO,
  USUARIOS_MODULO
} from 'src/store/constantes/modulos'

// AUTH
export const AUTENTICAR_USUARIO = 'autenticar'
export const OBTENER_USUARIO_AUTH = 'obtenerUsuarioAuth'
export const OBTENER_PERMISOS_USUARIO_AUTH = 'authPermisos'
export const LOGOUT = 'salir'

export const NAMED_AUTH_AUTENTICAR_USUARIO = nameSpacedString(
  AUTH_MODULO,
  AUTENTICAR_USUARIO
)

export const NAMED_AUTH_OBTENER_USUARIO = nameSpacedString(
  AUTH_MODULO,
  OBTENER_USUARIO_AUTH
)

export const NAMED_AUTH_OBTENER_PERMISOS = nameSpacedString(
  AUTH_MODULO,
  OBTENER_PERMISOS_USUARIO_AUTH
)

export const NAMED_AUTH_LOGOUT = nameSpacedString(AUTH_MODULO, LOGOUT)

// USUARIOS

export const GUARDAR_USUARIO = nameSpacedString(USUARIOS_MODULO, 'guardar')
export const EDITAR_USUARIO = nameSpacedString(USUARIOS_MODULO, 'editar')
export const OBTENER_USUARIO = nameSpacedString(USUARIOS_MODULO, 'obtener')
export const LISTA_USUARIOS = nameSpacedString(USUARIOS_MODULO, 'obtenerLista')
export const ELIMINAR_USUARIO = nameSpacedString(USUARIOS_MODULO, 'eliminar')
export const RESTAURAR_USUARIO = nameSpacedString(USUARIOS_MODULO, 'restaurar')
