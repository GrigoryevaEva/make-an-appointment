export interface IAPIDoctor {
  readonly name: string
  readonly specialization: string
  readonly workingHours: Interval
  readonly busyTime: Interval[]
}

type Interval = {
  readonly start: string
  readonly stop: string
}