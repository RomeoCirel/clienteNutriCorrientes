import {
  nameSpacedString,
  AUTH_MODULO,
  USUARIOS_MODULO
} from 'src/store/constantes/modulos'

// Auth
export const ESTA_LOGUEADO = 'estaLogueado'
export const USUARIO_AUTH = 'usuarioAuth'
export const CAMBIAR_CLAVE = 'cambiarClave'
export const NOMBRE_USUARIO_AUTH = 'nombreUsuario'
export const INICIALES_USUARIO_AUTH = 'inicialesUsuarioAuth'
export const PERMISOS_USUARIO_AUTH = 'permisosUsuarioAuth'

// espaced
export const SPACED_AUTH_LOGEADO = `${AUTH_MODULO}/${ESTA_LOGUEADO}`

// USUARIOS
export const USUARIO = nameSpacedString(USUARIOS_MODULO, 'modeloActual')
export const USUARIOS = nameSpacedString(USUARIOS_MODULO, 'listaActual')
export const ESTADO_USUARIOS = nameSpacedString(USUARIOS_MODULO, 'estadoModulo')
