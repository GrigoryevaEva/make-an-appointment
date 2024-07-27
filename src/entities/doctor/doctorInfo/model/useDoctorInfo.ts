import { create } from 'zustand'
import { State, Actions, Thunks } from './types'
import { getDoctorInfo } from '@/shared/api/doctor/doctorInfo/doctorInfo'
import { ErrorType } from '@/shared/types/error'

export const useDoctorInfo = create<State & Actions & Thunks>(set => ({
  doctorInfo: {
    name: '',
    specialization: '',
  },
  loading: true,
  error: null,
  fetchDoctorInfo: async () => {
    try {
      const resp = await getDoctorInfo()
      set({loading: false})
      set({ doctorInfo: {
        name: resp.name,
        specialization: resp.specialization
      } })
    } catch (err: unknown) {
      set({loading: false})
      const error = err as ErrorType
      set({ error: {
        messageError: error.message,
        status: error.response?.status
      } })
    }
  }
}))