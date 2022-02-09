<template>
  <div class="col-span-6 sm:col-span-3 mt-4 md:mt-1">
    <div>
      <label :for="nombreActual" class="sm:not-sr-only"
        >{{ labelActual
        }}<span v-if="requerido" class="text-red-500">*</span></label
      >
      <input
        v-if="tipo !== 'select'"
        :id="nombreActual"
        :name="nombreActual"
        :type="tipoActual"
        :autocomplete="nombreActual"
        required=""
        :placeholder="placeHolderActual"
        :value="valor"
        @input="updateValor"
        class="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        :class="
          esValido
            ? 'border-gray-300 placeholder-gray-500 text-gray-900'
            : 'border-red-300 placeholder-red-500 text-red-900'
        "
      />
      <select
        v-else
        :id="nombreActual"
        :name="nombreActual"
        :placeholder="placeHolderActual"
        :value="valor"
        @input="updateValor"
        :autocomplete="nombreActual"
        class="rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        :class="
          esValido
            ? 'border-gray-300 placeholder-gray-500 text-gray-900'
            : 'border-red-300 placeholder-red-500 text-red-900'
        "
      >
        <template v-for="option in options" :key="option.value">
          <option :value="option.value">{{ option.label }}</option>
        </template>
      </select>
    </div>
    <div>
      <p
        class="text-xs px-2"
        :class="esValido ? ' text-gray-400' : 'text-red-500'"
      >
        {{ descripcionActual }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, watch, ref, Ref } from 'vue'
import {
  PropTipo,
  PropLabel,
  PropNombre,
  PropEsValido,
  PropMensajeError,
  PropPlaceholder,
  PropValor,
  PropDescripcion,
  PropOptions,
  PropRequerido,
  PropsInput
} from 'src/types/Formulario-tipos'

export default defineComponent({
  name: 'inputForm',
  props: {
    tipo: {
      type: String as PropType<PropTipo>,
      default: 'text'
    },
    nombre: {
      type: String as PropType<PropNombre>,
      default: ''
    },
    label: {
      type: String as PropType<PropLabel>,
      default: ''
    },
    placeHolder: {
      type: String as PropType<PropPlaceholder>,
      default: ''
    },
    esValido: {
      type: Boolean as PropType<PropEsValido>,
      default: true
    },
    error: {
      type: String as PropType<PropMensajeError>,
      default: ''
    },
    valor: {
      type: [String, Number, null] as PropType<PropValor>,
      default: null
    },
    descripcion: {
      type: String as PropType<PropDescripcion>,
      default: ''
    },
    options: {
      type: Array as PropType<PropOptions>,
      default: () => [{ value: 0, label: 'Sin Opciones' }]
    },
    requerido: {
      type: Boolean as PropType<PropRequerido>,
      default: false
    }
  },
  emits: ['update:valor'],
  setup(props: PropsInput, context) {
    const tipoActual: Ref<PropsInput['tipo']> = ref(props.tipo)
    const nombreActual: Ref<PropsInput['nombre']> = ref(props.nombre)
    const labelActual: Ref<PropsInput['label']> = ref(props.label)
    const validez: Ref<PropsInput['esValido']> = ref(props.esValido)
    const mensaje: Ref<PropsInput['error']> = ref(props.error)
    const placeHolderActual: Ref<PropsInput['placeHolder']> = ref(
      props.placeHolder
    )
    const descripcionActual: Ref<PropsInput['descripcion']> = ref(
      props.descripcion
    )

    watch(
      () => props.tipo,
      (nueva, anterior) => {
        tipoActual.value = nueva !== anterior ? nueva : anterior
      }
    )

    watch(
      () => props.nombre,
      (nueva, anterior) => {
        nombreActual.value = nueva !== anterior ? nueva : anterior
      }
    )

    watch(
      () => props.label,
      (nueva, anterior) => {
        labelActual.value = nueva !== anterior ? nueva : anterior
      }
    )

    watch(
      () => props.esValido,
      (nueva, anterior) => {
        validez.value = nueva !== anterior ? nueva : anterior
      }
    )

    watch(
      () => props.error,
      (nueva, anterior) => {
        mensaje.value = nueva !== anterior ? nueva : anterior
      }
    )
    watch(
      () => props.placeHolder,
      (nueva, anterior) => {
        placeHolderActual.value = nueva !== anterior ? nueva : anterior
      }
    )

    watch(
      () => props.descripcion,
      (nueva, anterior) => {
        descripcionActual.value = nueva !== anterior ? nueva : anterior
      }
    )
    return {
      tipoActual,
      nombreActual,
      labelActual,
      validez,
      mensaje,
      placeHolderActual,
      descripcionActual,
      updateValor: (event: Event) => {
        const targ = event.target as HTMLInputElement
        context.emit('update:valor', targ.value)
      }
    }
  }
})
</script>
