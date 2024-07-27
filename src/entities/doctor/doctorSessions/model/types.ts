import { IDoctorSessions } from "@/shared/api/doctor/doctorSessions/types"

export type State = {
  readonly doctorSessions: IDoctorSessions
  readonly loading: boolean
  readonly error: null
}

export type Actions = {}

export type Thunks = {}