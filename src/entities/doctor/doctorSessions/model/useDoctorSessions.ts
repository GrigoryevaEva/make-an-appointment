import { create } from 'zustand'
import { State, Actions, Thunks } from './types'
import { ErrorType } from '@/shared/types/error'
import { getDoctorSessions } from '@/shared/api/doctor/doctorSessions/doctorSessions'
import { dateToUnix } from '@/shared/function'
import { sessionUnixSize } from '@/shared/constants'

export const useDoctorSessions = create<State & Actions & Thunks>(set => ({
  doctorSessions: {
    workingHours: {
      start: 0,
      stop: 0,
    },
    busyTime: [],
    freeSessions: [],
  },
  loading: true,
  error: null,
  fetchDoctorSessions: async () => {
    try {
      const resp = await getDoctorSessions()
      set({loading: false})

      const startWorking = dateToUnix(`${resp.workingHours.start}`)
      const stopWorking = dateToUnix(`${resp.workingHours.stop}`)
      const lastSession = stopWorking - sessionUnixSize

      const busyTime = resp.busyTime.map((i) => (
        {
          start: dateToUnix(`${i.start}`),
          stop: dateToUnix(`${i.stop}`),
        }
      )).sort((a, b) => (a.start - b.start))

      const freeSessions = []

      label: for (let startSession = startWorking; startSession <= lastSession;) {
        let stopSession = startSession + sessionUnixSize
    
        for (let i of busyTime) {
          if (i.start >= startSession && i.start < stopSession ) {
            startSession = i.stop
            continue label
          }
        }
    
        freeSessions.push(startSession)
        startSession = stopSession
      }

      set({
        doctorSessions: {
          workingHours: {
            start: startWorking,
            stop: stopWorking,
          },
          busyTime: busyTime,
          freeSessions: freeSessions,
        }
      })
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