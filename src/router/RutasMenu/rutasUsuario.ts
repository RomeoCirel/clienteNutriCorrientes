import { ListaItemsMenu } from 'src/types/NavMenu-tipos'

import { UserIcon, LogoutIcon } from '@heroicons/vue/outline'

export const session: ListaItemsMenu = [
  {
    name: 'Perfil',
    description: 'Administrar tus datos personales',
    nombreRuta: '#',
    icon: UserIcon
  },
  {
    name: 'Salir',
    accion: 'cerrar',
    nombreRuta: '#',
    icon: LogoutIcon
  }
]

export default session
