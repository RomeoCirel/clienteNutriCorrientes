import { ListaItemsMenu } from 'src/types/NavMenu-tipos'

import {
  ShoppingCartIcon,
  PuzzleIcon,
  BeakerIcon,
  ViewGridIcon
} from '@heroicons/vue/outline'

export const recursos: ListaItemsMenu = [
  {
    name: 'Productos',
    description: 'Administracion productos y sus formulas',
    nombreRuta: '#',
    icon: BeakerIcon,
    permiso: 'personal.listado'
  },
  {
    name: 'Ingredientes',
    description: 'Crear, editar o deshabilitar ingredientes del sistema',
    nombreRuta: '#',
    icon: PuzzleIcon,
    permiso: 'personal.listado'
  },
  {
    name: 'Compras',
    description:
      'Cargar una compra de ingredientes, confirmar recepcion de la compra, solicitudes de compra pendientes',
    nombreRuta: '#',
    icon: ShoppingCartIcon,
    permiso: 'personal.listado'
  },
  {
    name: 'Stock',
    description: 'Control del stock de ingredientes',
    nombreRuta: '#',
    icon: ViewGridIcon,
    permiso: 'personal.listado'
  }
]

export default recursos
