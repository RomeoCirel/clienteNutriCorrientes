import { ListaItemsMenu } from 'src/types/NavMenu-tipos'
import {
  BookmarkAltIcon,
  CalendarIcon,
  UserGroupIcon,
  ShieldCheckIcon
} from '@heroicons/vue/outline'

export const gestion: ListaItemsMenu = [
  {
    name: 'Personal',
    description: 'Crear,e ditar o deshabilitar un usuario en el sistema',
    nombreRuta: '#',
    icon: UserGroupIcon
  },
  {
    name: 'Marcas',
    description: 'Administrar las marcas/clientes existentes en el sistema',
    nombreRuta: '#',
    icon: BookmarkAltIcon
  },
  {
    name: 'Objetivos',
    description: 'Crear y hacers seguimiento de objetivos de producción',
    nombreRuta: '#',
    icon: CalendarIcon
  },
  {
    name: 'Lineas de producción',
    description:
      'Crear, Editar o deshabilitar una linead de produccion al sistema',
    nombreRuta: '#',
    icon: ShieldCheckIcon
  }
]

export default gestion
