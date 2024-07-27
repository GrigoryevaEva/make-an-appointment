import { create } from 'zustand'
import { State, Actions, Thunks } from './types'

export const useDoctorInfo = create<State & Actions & Thunks>(set => ({
  doctorInfo: {
    name: '',
    specialization: '',
  },
  loading: false,
  error: null,
}))