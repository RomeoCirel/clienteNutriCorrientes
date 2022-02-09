import { RespuestaObtenerPermisos } from 'src/types/Permisos/permisos-type'
import { peticionApi } from 'src/services/peticionesApi/clienteHTTP'
import { LocalStorage } from 'quasar'

export const obtenerPermisos = async () => {
  const res = await peticionApi<RespuestaObtenerPermisos>({
    metodo: 'GET',
    url: 'auth/permisos',
    conToken: true
  })
  if (res.ok) {
    if (res.estado === 200) {
      const permisos = res.datos.permisos
      LocalStorage.set('permisos', permisos)
    }
  }
  return res
}

export default { obtenerPermisos }
