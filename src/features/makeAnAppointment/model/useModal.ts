import { create } from 'zustand'
import { Actions, State } from './types'

export const useModal = create<State & Actions>(set => ({
  active: false,
  keySession: 0,
  toggleActive: () => {
    set((state) => ({
      active: state.active ? false : true
    }))
  },
  toggleKeySession: (key) => {
    set((state) => ({
      keySession: state.keySession ? 0 : key
    }))
  }
}))