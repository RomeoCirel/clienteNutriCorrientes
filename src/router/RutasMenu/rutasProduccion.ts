import { ListaItemsMenu } from 'src/types/NavMenu-tipos'
import {
  ChartBarIcon,
  ClockIcon,
  DocumentAddIcon,
  DocumentTextIcon
} from '@heroicons/vue/outline'

export const produccion: ListaItemsMenu = [
  {
    name: 'Plan Actual',
    description: 'Administracion el plan de produccion en ejecución',
    nombreRuta: '#',
    icon: DocumentTextIcon,
    permiso: 'personal.listado'
  },
  {
    name: 'Nuevo Plan',
    description: 'Crear, editar un plan futuro',
    nombreRuta: '#',
    icon: DocumentAddIcon,
    permiso: 'personal.listado'
  },
  {
    name: 'Historial de planes',
    description: 'Historial de planes de produccion',
    nombreRuta: '#',
    icon: ClockIcon,
    permiso: 'personal.listado'
  },
  {
    name: 'Estadisticas',
    description: 'Estadisticas de produccion y perdidas de ingredientes',
    nombreRuta: '#',
    icon: ChartBarIcon,
    permiso: 'personal.listado'
  }
]

export default produccion
