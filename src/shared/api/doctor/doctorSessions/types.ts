export interface IDoctorSessions {
  readonly workingHours: Interval
  readonly busyTime: Interval[]
  readonly freeSessions?: number[]
}

type Interval = {
  readonly start: number
  readonly stop: number
}