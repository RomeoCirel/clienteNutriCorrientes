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
    icon: BeakerIcon
  },
  {
    name: 'Ingredientes',
    description: 'Crear, editar o deshabilitar ingredientes del sistema',
    nombreRuta: '#',
    icon: PuzzleIcon
  },
  {
    name: 'Compras',
    description:
      'Cargar una compra de ingredientes, confirmar recepcion de la compra, solicitudes de compra pendientes',
    nombreRuta: '#',
    icon: ShoppingCartIcon
  },
  {
    name: 'Stock',
    description: 'Control del stock de ingredientes',
    nombreRuta: '#',
    icon: ViewGridIcon
  }
]

export default recursos
