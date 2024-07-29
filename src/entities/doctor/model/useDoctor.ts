import { create } from 'zustand'
import { State, Actions, Thunks } from './types'
import { ErrorType } from '@/shared/types/error'
import { dateToUnix, getCurrentDate } from '@/shared/function'
import { sessionUnixSize } from '@/shared/constants'
import { getDoctor } from '@/shared/api/doctor/doctor'

export const useDoctor = create<State & Actions & Thunks>((set, get) => ({
  doctorInfo: {
    name: '',
    specialization: '',
  },
  doctorSessions: {
    workingHours: {
      start: 0,
      stop: 0,
    },
    busyTime: [],
    freeSessions: [],
  },
  currentDate: {
    year: 0,
    month: 0,
    day: 0,
  },
  loading: true,
  error: null,
  makeAnAppointment: (key) => {

    const busy = get().doctorSessions.busyTime
    const free = get().doctorSessions.freeSessions

    busy.splice(
      busy.findLastIndex((i) => (
        i.stop < key
      )) + 1,
      0,
      {
        start: key,
        stop: key + sessionUnixSize
      }
    ),

    free.splice(
      free.indexOf(key),
      1
    ),

    set((state) => ({
      doctorSessions: {
        workingHours: state.doctorSessions.workingHours,
        busyTime: busy,
        freeSessions: free,
      },
    }))
  },
  fetchDoctor: async () => {
    try {
      const resp = await getDoctor()
      set({loading: false})

      const currentDate = getCurrentDate()

      const startWorking = dateToUnix(currentDate, resp.workingHours.start)
      const stopWorking = dateToUnix(currentDate, resp.workingHours.stop)
      const lastSession = stopWorking - sessionUnixSize

      const busyTime = resp.busyTime.map((i) => (
        {
          start: dateToUnix(currentDate, i.start),
          stop: dateToUnix(currentDate, i.stop),
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

      set({currentDate: currentDate})

      set({ 
        doctorInfo: {
        name: resp.name,
        specialization: resp.specialization
        }
      })

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