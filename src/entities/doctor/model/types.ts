import { IDate } from "@/shared/types/common"
import { RejectedDataType } from "@/shared/types/error"

export type State = {
  readonly doctorInfo: {
    readonly name: string
    readonly specialization: string
  }
  readonly doctorSessions: {
    readonly workingHours: Interval
    readonly busyTime: Interval[]
    readonly freeSessions: number[]
  }
  readonly currentDate: IDate
  readonly loading: boolean
  readonly error: null | RejectedDataType
}

type Interval = {
  readonly start: number
  readonly stop: number
}

export type Actions = {
  readonly makeAnAppointment: (key: number) => void
}

export type Thunks = {
  readonly fetchDoctor: () => void
}