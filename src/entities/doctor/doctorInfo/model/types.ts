import { IDoctorInfo } from "@/shared/api/doctor/doctorInfo/types"
import { RejectedDataType } from "@/shared/types/error"

export type State = {
  readonly doctorInfo: IDoctorInfo
  readonly loading: boolean
  readonly error: null | RejectedDataType
}

export type Actions = {}

export type Thunks = {
  readonly fetchDoctorInfo: () => void
}