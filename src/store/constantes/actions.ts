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
