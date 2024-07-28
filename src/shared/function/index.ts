import {
  IDate,
  ITime
} from '../types/common'

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
  time: string
): number => {
  const { year, month, day } = date
  const { hours, minutes } = convertTimeStrToObjNum(time)
  return new Date(
    year,
    month-1,
    day,
    hours,
    minutes
  ).getTime()
}

export const unixToTime = (timeStamp: number): string => {
  return new Date(timeStamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}