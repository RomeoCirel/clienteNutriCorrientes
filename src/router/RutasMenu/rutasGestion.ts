import { ListaItemsMenu } from 'src/types/NavMenu-tipos'
import {
  BookmarkAltIcon,
  CalendarIcon,
  UserGroupIcon,
  ShieldCheckIcon
} from '@heroicons/vue/solid'
import { rutaPersonal } from '../rutasNombres'
import {
  PERMISO_MARCAS_ADMIN,
  PERMISO_PERSONAL_ADMIN
} from 'src/types/Permisos/constantes'

export const gestion: ListaItemsMenu = [
  {
    name: 'Personal',
    description: 'Crear,e ditar o deshabilitar un usuario en el sistema',
    nombreRuta: rutaPersonal,
    icon: UserGroupIcon,
    permiso: PERMISO_PERSONAL_ADMIN
  },
  {
    name: 'Marcas',
    description: 'Administrar las marcas/clientes existentes en el sistema',
    nombreRuta: '#',
    icon: BookmarkAltIcon,
    permiso: PERMISO_MARCAS_ADMIN
  },
  {
    name: 'Objetivos',
    description: 'Crear y hacers seguimiento de objetivos de producción',
    nombreRuta: '#',
    icon: CalendarIcon,
    permiso: 'personal.listado'
  },
  {
    name: 'Lineas de producción',
    description:
      'Crear, Editar o deshabilitar una linead de produccion al sistema',
    nombreRuta: '#',
    icon: ShieldCheckIcon,
    permiso: 'personal.listado'
  }
]

export default gestion
