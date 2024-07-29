export type State = {
  readonly active: boolean
  readonly keySession: number
}

export type Actions = {
  readonly toggleActive: () => void
  readonly toggleKeySession: (key?: number) => void
}