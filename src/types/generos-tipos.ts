/* eslint-disable camelcase */
import { Modelo } from './modelos-tipos'

export interface Genero {
  genero: string
  abreviado: string
}

export interface ModeloGenero extends Genero, Modelo {}
