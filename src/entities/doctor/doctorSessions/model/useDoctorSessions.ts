import { create } from 'zustand'
import { State, Actions, Thunks } from './types'

export const useDoctorSessions = create<State & Actions & Thunks>(set => ({
  doctorSessions: {
    workingHours: {
      start: 0,
      stop: 0,
    },
    busyTime: [],
    freeSessions: [],
  },
  loading: false,
  error: null,
}))