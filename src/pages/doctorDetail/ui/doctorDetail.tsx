import { useEffect } from 'react'
import { Header } from '@/widgets/header'
import { DoctorInfo } from '@/widgets/doctorInfo'
import { FreeSessionsList } from '@/widgets/freeSessionsList'
import { AppointmentDates } from '@/widgets/appointmentDates'
import { Modal } from '@/features/makeAnAppointment'
import { useDoctor } from '@/entities/doctor'
import { useModal } from '@/features/makeAnAppointment'

import style from './style.module.scss'

export const DoctorDetail = () => {

  const {
    fetchDoctor,
  } = useDoctor(state => ({
    fetchDoctor: state.fetchDoctor
  }))

  const {
    active
  } = useModal(state => ({
    active: state.active
  }))

  useEffect(() => {
		fetchDoctor()
	}, [])


  return (
    <>
      <Header />
      <main className={style.root}>
        <DoctorInfo />
        <div className={style.root__containerAppointment}>
          <AppointmentDates />
          <FreeSessionsList />
          {
            active 
            ? <Modal />
            : <></>
          }
        </div>
      </main>
    </>
  )
}
