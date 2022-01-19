export interface ItemMenu {
  name: string
  nombreRuta: string
  description?: string
  accion?: unknown
  icon?: unknown
}
export interface ItemMenuCurrent extends ItemMenu {
  current: boolean
}

export type ListaItemsMenu = Array<ItemMenu>
