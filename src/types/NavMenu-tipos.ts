import { ClavesPermisos } from 'src/types/Permisos/permisos-type'

export interface ItemMenu {
  name: string
  nombreRuta: string
  description?: string
  accion?: unknown
  icon?: unknown
  permiso: ClavesPermisos
}
export interface ItemMenuCurrent extends ItemMenu {
  current: boolean
}

export type ListaItemsMenu = Array<ItemMenu>
