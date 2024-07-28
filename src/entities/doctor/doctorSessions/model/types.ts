import { IDoctorSessions } from "@/shared/api/doctor/doctorSessions/types"
import { RejectedDataType } from "@/shared/types/error"

export type State = {
  readonly doctorSessions: IDoctorSessions
  readonly loading: boolean
  readonly error: null | RejectedDataType
}

export type Actions = {}

export type Thunks = {
  readonly fetchDoctorSessions: () => void
}