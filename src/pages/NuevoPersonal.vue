<template>
  <div class="container pl-5 pt-5 w-full">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Alta de nuevo Personal
    </h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">Datos Personales</p>
  </div>
  <div class="w-full px-6 w-full lg:w-1/2 xl:w-1/3">
    <Steps :pasos="listaPasos.lista" :pasoActual="pasoActual" />
  </div>
  <div class="px-4 pt-5 pb-20 sm:px-6">
    <div class="mt-10 sm:mt-0 flex justify-start">
      <div class="md:grid md:grid-cols-3 md:gap-6 w-full lg:w-1/2 xl:w-1/3">
        <template v-for="input in form.config" :key="input.nombre">
          <InputForm
            :tipo="input.tipo"
            :nombre="input.nombre"
            :label="input.label"
            :placeHolder="input.placeHolder"
            :esValido="input.esValido"
            :error="input.error"
            :options="input.options"
            :descripcion="input.descripcion"
            :requerido="input.requerido"
            v-model:valor="form.modelo[input.nombre]"
          />
        </template>
        <div class="mt-4 row grid-rows-2 md:grid-rows-1 grid-flow-col gap-4">
          <div class="mt-4 md:mt-0">
            <button
              type="button"
              class="inline-flex rounded-md border shadow-sm px-4 py-2 bg-red-50 hover:bg-red-500 text-red-600 hover:text-gray-50 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 w-full p-5 md:w-auto sm:text-sm"
            >
              Cancelar
            </button>
          </div>
          <div class="mt-4 md:mt-0">
            <button
              type="button"
              class="inline-flex rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-indigo-600 hover:bg-indigo-100 text-gray-100 hover:text-indigo-600 text-base font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 w-full p-5 md:w-auto sm:text-sm"
              ref="cancelButtonRef"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, Ref, ref, onBeforeMount } from 'vue'
import useAuth from 'src/composables/useAuth'
import useMenuRoutes from 'src/composables/useMenuRutes'
import Steps, { PropPasoActual, PropPasos } from 'src/components/Steps.vue'
import InputForm from 'src/components/utlidades/InputForm.vue'
import {
  USUARIO_DEFAULT,
  UsuarioNuevoFormulario,
  ModeloUsuario,
  FormularioUsuario
} from 'src/types/usuarios-tipos'

import { ListaInputsForm } from 'src/types/Formulario-tipos'
import {
  PERMISO_PERSONAL_CREAR,
  PERMISO_PERSONAL_EDITAR
} from 'src/types/Permisos/constantes'
import { rutaHome } from 'src/router/rutasNombres'

type Form = {
  config: ListaInputsForm
  modelo: UsuarioNuevoFormulario | ModeloUsuario
}

type PasosReactive = {
  lista: PropPasos
}

export default defineComponent({
  name: 'NuevoPersonalView',
  components: {
    InputForm,
    Steps
  },
  setup() {
    const { tienePermiso } = useAuth()
    const { irARutaPorNombre } = useMenuRoutes()

    onBeforeMount(() => {
      if (
        !tienePermiso(PERMISO_PERSONAL_CREAR) &&
        !tienePermiso(PERMISO_PERSONAL_EDITAR)
      ) {
        irARutaPorNombre(rutaHome)
      }
    })
    const listaPasos = reactive<PasosReactive>({
      lista: [
        { titulo: 'Datos Personales', numero: 1, estado: 'pendiente' },
        { titulo: 'Domicilio', numero: 2, estado: 'pendiente' },
        { titulo: 'Puesto Laboral', numero: 3, estado: 'pendiente' }
      ]
    })
    const pasoActual: Ref<PropPasoActual> = ref(2)
    const form = reactive<Form>({
      config: FormularioUsuario,
      modelo: { ...USUARIO_DEFAULT }
    })
    return {
      form,
      listaPasos,
      pasoActual
    }
  }
})
</script>
