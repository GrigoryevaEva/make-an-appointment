import { IDoctorInfo } from "@/shared/api/doctor/doctorInfo/types"

export type State = {
  readonly doctorInfo: IDoctorInfo
  readonly loading: boolean
  readonly error: null
}

export type Actions = {}

export type Thunks = {}