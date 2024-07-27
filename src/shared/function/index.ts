import {
  IDate,
  ITime
} from './types'

export const getCurrentDate = (): IDate => {
  const date = new Date()
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  }
}

export const convertTimeStrToObjNum = (time: string): ITime => {
  const arrTime = time.split(':')
  return {
    hours: Number(arrTime[0]),
    minutes: Number(arrTime[1])
  }
}

export const dateToUnix = (
  date: IDate, 
  h: number, 
  min: number
  ): number => {
  return new Date(
    date.year,
    date.month-1,
    date.day,
    h,
    min
  ).getTime()
}

export const unixToTime = (timeStamp: number): string => {
  return new Date(timeStamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}