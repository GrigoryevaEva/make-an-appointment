import { Button } from '@/shared/ui/button'

import style from './style.module.scss'

export const AppointmentDates = () => {

  const weekday = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ]

  const dateNow = new Date()

  return (
    <div className={style.root}>
      <h4>Appointment</h4>
      <Button active={true} className={style.root__button}>
        <span>{weekday[dateNow.getDay()]}</span>
        <span>{dateNow.getDate()}</span>
      </Button>
    </div>
  )
}
