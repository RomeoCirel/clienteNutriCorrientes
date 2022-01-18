import { recursos } from 'src/router/RutasMenu/rutasRecursos'
import { produccion } from 'src/router/RutasMenu/rutasProduccion'
import { gestion } from 'src/router/RutasMenu/rutasGestion'
import { session } from 'src/router/RutasMenu/rutasUsuario'

import { useRouter } from 'vue-router'
const useMenuRoutes = () => {
  const router = useRouter()
  return {
    recursos,
    produccion,
    gestion,
    session,
    irARutaPorNombre: (nombre: string) => void router.push({ name: nombre })
  }
}

export default useMenuRoutes
