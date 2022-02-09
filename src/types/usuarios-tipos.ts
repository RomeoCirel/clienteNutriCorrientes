/* eslint-disable camelcase */
import { Modelo, ID } from './modelos-tipos'
import { ModeloGenero } from './generos-tipos'
import { ModeloParaFormulario } from './utilidades-tipos'
import { ListaInputsForm } from 'src/types/Formulario-tipos'
import { Respuesta } from '../services/peticionesApi/clienteHTTP'
import {
  ErroresValidacion,
  RespuestaValidacion,
  RespuestasComunesApi
} from 'src/types/respuestas-tipos'
import { MensajeExito } from 'src/types/mensaje-tipos'

export interface Usuario {
  nombre: string
  apellido: string
  dni: number
  email: string
  fechaNacimiento: string
  genero_id: ID
  cambiar_clave: boolean
}

export interface ModeloUsuario extends Usuario, Modelo {
  genero: ModeloGenero
}

export type ListaUsuarios = Array<ModeloUsuario>

export type UsuarioNuevoFormulario = ModeloParaFormulario<ModeloUsuario>

export const USUARIO_DEFAULT: UsuarioNuevoFormulario = {
  id: null,
  nombre: null,
  apellido: null,
  dni: null,
  email: null,
  fechaNacimiento: null,
  genero_id: 0,
  cambiar_clave: null,
  genero: null,
  updated_at: null,
  created_at: null,
  deleted_at: null
}

export type ErroresValidacionUsuario = ErroresValidacion<Usuario>

export const USUARIO_VALIDACION: ErroresValidacionUsuario = {
  nombre: {
    esValido: true,
    error: null
  },
  apellido: {
    esValido: true,
    error: null
  },
  dni: {
    esValido: true,
    error: null
  },
  email: {
    esValido: true,
    error: null
  },
  fechaNacimiento: {
    esValido: true,
    error: null
  },
  genero_id: {
    esValido: true,
    error: null
  },
  cambiar_clave: {
    esValido: true,
    error: null
  }
}

export const FormularioUsuario: ListaInputsForm = [
  {
    tipo: 'text',
    nombre: 'nombre',
    label: 'Nombres',
    placeHolder: 'Ingrese el nombre',
    esValido: true,
    valor: '',
    error: '',
    descripcion: '',
    requerido: true
  },
  {
    tipo: 'text',
    nombre: 'apellido',
    label: 'Apellidos',
    placeHolder: 'Ingrese el apellido',
    esValido: true,
    valor: '',
    error: '',
    descripcion: '',
    requerido: true
  },
  {
    tipo: 'text',
    nombre: 'dni',
    label: 'DNI',
    placeHolder: 'Ingrese el DNI',
    esValido: true,
    valor: '',
    error: '',
    descripcion: 'Ingrese los 8 digitos sin "." (puntos)',
    requerido: true
  },
  {
    tipo: 'email',
    nombre: 'email',
    label: 'Correo',
    placeHolder: 'Ingrese el Correo',
    esValido: true,
    valor: '',
    error: '',
    descripcion:
      'Ingrese el correo electronidco sin mayusculas ni espacios, por ejemplo: nombreapellido@mail.com',
    requerido: true
  },
  {
    tipo: 'date',
    nombre: 'fechaNacimiento',
    label: 'Fecha de Nacimiento',
    placeHolder: 'Ingrese la Fecha de Nacimiento',
    esValido: true,
    valor: '',
    error: '',
    descripcion: '',
    requerido: true
  },
  {
    tipo: 'select',
    nombre: 'genero_id',
    label: 'Genero',
    placeHolder: 'Seleccione el genero',
    esValido: true,
    valor: 0,
    error: '',
    descripcion: '',
    requerido: true,
    options: [
      {
        value: 0,
        label: 'Seleccione el genero'
      },
      {
        value: 1,
        label: 'Masculino'
      },
      {
        value: 2,
        label: 'Femenino'
      },
      {
        value: 3,
        label: 'X'
      }
    ]
  }
]

export interface DatosUsuario {
  usuario: ModeloUsuario
}

interface DatosListaUsuario {
  usuarios: ListaUsuarios
}

type RespuestaUsuario = Respuesta<true, 200, DatosUsuario>

type RespuestaListaUsuarios = Respuesta<true, 200, DatosListaUsuario>

export type RespuestaGetUsuario = RespuestaUsuario | RespuestasComunesApi

export type RespuestaGetListaUsuarios =
  | RespuestaListaUsuarios
  | RespuestasComunesApi

interface DatosCrearEditarUsuario {
  usuario: ModeloUsuario
  mensaje: MensajeExito
}

type RespuestaCrearUsuario = Respuesta<true, 201, DatosCrearEditarUsuario>

type RespuestaEditarUsuario = Respuesta<true, 200, DatosCrearEditarUsuario>

type RespuestaEliminarUsuario = Respuesta<true, 204, null>

export type RespuestaStoreUsuario =
  | RespuestaCrearUsuario
  | RespuestaValidacion<Usuario>
  | RespuestasComunesApi

export type RespuestaUpdateUsuario =
  | RespuestaEditarUsuario
  | RespuestaValidacion<Usuario>
  | RespuestasComunesApi

export type RespuestaDeleteUsuario =
  | RespuestaEliminarUsuario
  | RespuestasComunesApi

export type RespuestaRestoreUsuario =
  | RespuestaEditarUsuario
  | RespuestasComunesApi
