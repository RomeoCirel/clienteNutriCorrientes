/* eslint-disable camelcase */

export interface Timestamps {
  created_at: string
  updated_at: string | null
  deleted_at: string | null
}
export type ID = number

export interface Modelo extends Timestamps {
  id: ID
}
